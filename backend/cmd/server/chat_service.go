package main

import (
	"context"
	pb "gRPChat/pkg/grpc"
	"github.com/bufbuild/connect-go"
	connect_go "github.com/bufbuild/connect-go"
	"log"
	"time"
)

var (
	UserList = &pb.UserList{
		Users: []*pb.User{
			{Id: "1", Name: "Alice"},
			{Id: "2", Name: "Bob"},
			{Id: "3", Name: "Charlie"},
		},
	}
	joinUsers     []*pb.User
	messages      []*pb.ChatMessage
	messageStream *connect_go.ServerStream[pb.ChatMessage]
)

type ChatService struct {
	lastSent map[string]int64
}

func (s *ChatService) Join(
	ctx context.Context,
	req *connect_go.Request[pb.User],
) (*connect_go.Response[pb.JoinResponse], error) {

	log.Printf("Received message body from client: %s", req.Msg.Name)
	user := &pb.User{Id: req.Msg.Id, Name: req.Msg.Name}
	joinUsers = append(joinUsers, user)

	return &connect_go.Response[pb.JoinResponse]{
		Msg: &pb.JoinResponse{
			Msg: "Hello " + req.Msg.Name,
		},
	}, nil
}
func (s *ChatService) SendMsg(
	ctx context.Context,
	msg *connect_go.Request[pb.ChatMessage],
) (*connect_go.Response[pb.Empty], error) {
	messages = append(messages, msg.Msg)
	log.Printf("Received message body from client: %s", msg.Msg.Message)

	//通知
	if messageStream != nil {
		if err := messageStream.Send(msg.Msg); err != nil {
			return nil, err
		}
	}
	//成功時レスポンス
	return &connect_go.Response[pb.Empty]{
		Msg: &pb.Empty{},
	}, nil
}

func (s *ChatService) ReceiveMsg(
	ctx context.Context,
	req *connect_go.Request[pb.Empty],
	stream *connect_go.ServerStream[pb.ChatMessage],
) error {
	messageStream = stream
	for {
		for _, msg := range messages {
			if err := stream.Send(msg); err != nil {
				return err
			}
		}
		time.Sleep(10 * time.Second)
	}
}

func (s *ChatService) GetAllUsers(
	ctx context.Context,
	_ *connect.Request[pb.Empty],
) (*connect_go.Response[pb.UserList], error) {
	//joinUsersに入っているユーザーをUserListから削除
  for _, user := range joinUsers {
    for i, u := range UserList.Users {
      if user.Id == u.Id {
        UserList.Users = append(UserList.Users[:i], UserList.Users[i+1:]...)
      }
    }
  }
	return &connect_go.Response[pb.UserList]{
		Msg: UserList,
	}, nil
}
