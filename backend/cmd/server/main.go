package main

import (
	"context"
	"fmt"
	"gRPChat/pkg/grpc"
	"gRPChat/pkg/grpc/grpcconnect"
	"github.com/bufbuild/connect-go"
	grpcreflect "github.com/bufbuild/connect-grpcreflect-go"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"log"
	"net/http"
  "github.com/rs/cors"
)

type GreetServer struct {
}

func (s *GreetServer) Hello(ctx context.Context, req *connect.Request[grpc.HelloRequest]) (*connect.Response[grpc.HelloResponse], error) {
	log.Println("Request headers:", req.Header())
	if req.Msg.Name == "" {
		//エラーにステータスコードを追加
		return nil, connect.NewError(
			connect.CodeInvalidArgument, fmt.Errorf("name is required"),
		)
	}
	greetResp := &grpc.HelloResponse{
		Message: "Hello, " + req.Msg.Name,
	}
	resp := connect.NewResponse(greetResp)
	//ヘッダをセット
	resp.Header().Set("Greet-Version", "v1")
	return resp, nil
}

// リフレクション
func newServeMuxWithReflection() *http.ServeMux {
	mux := http.NewServeMux()
	reflector := grpcreflect.NewStaticReflector(
		"myapp.GreetingService",
	)
	mux.Handle(grpcreflect.NewHandlerV1(reflector))
	mux.Handle(grpcreflect.NewHandlerV1Alpha(reflector))
	return mux
}

// インターセプター
func newInterCeptors() connect.Option {
	interceptor := func(next connect.UnaryFunc) connect.UnaryFunc {
		return connect.UnaryFunc(func(
			ctx context.Context,
			req connect.AnyRequest,
		) (connect.AnyResponse, error) {
			//ヘッダをセット
			req.Header().Set("hoge", "fuga")
			return next(ctx, req)
		})
	}
	return connect.WithInterceptors(
		connect.UnaryInterceptorFunc(interceptor),
	)
}

func main() {
	greetServer := &GreetServer{}
	mux := newServeMuxWithReflection()
	interceptor := newInterCeptors()
	path, handler := grpcconnect.NewGreetingServiceHandler(greetServer, interceptor)
	mux.Handle(path, handler)
  // corsHandler := cors.Default().Handler(h2c.NewHandler(mux, &http2.Server{}))
  corsHandler := cors.New(cors.Options{
    AllowedOrigins: []string{"http://localhost:3000"}, // or "*" to allow all origins
    AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
    AllowedHeaders: []string{"*"},
    AllowCredentials: true,
}).Handler(h2c.NewHandler(mux, &http2.Server{}))
	http.ListenAndServe(":8080",
    corsHandler,
	)
}
