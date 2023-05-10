package main

import (
	"context"
	"fmt"
	hellopb "gRPChat/pkg/grpc"
	"google.golang.org/grpc"
  "google.golang.org/grpc/reflection"
	"log"
	"net"
	"os"
	"os/signal"
)

type myServer struct {
	hellopb.UnimplementedGreetingServiceServer
}

func NewMyServer() *myServer {
  return &myServer{}
}

func main() {
	port := 8080
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()

	hellopb.RegisterGreetingServiceServer(s, NewMyServer())

  reflection.Register(s)

	go func() {
		log.Printf("Start gRPC Server port: %v", port)
		s.Serve(listener)
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("Stopping gRPC Server ...")
	s.GracefulStop()
}

func (s *myServer) Hello(ctx context.Context, req *hellopb.HelloRequest) (*hellopb.HelloResponse, error) {
	return &hellopb.HelloResponse{
		Message: fmt.Sprintf("Hello,%s!", req.GetName()),
	}, nil
}
