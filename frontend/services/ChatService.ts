import { ChatService } from '@/chat_connectweb'
import { Empty,User } from '@/chat_pb'
import {
  createConnectTransport,
  createPromiseClient,
} from '@bufbuild/connect-web';

export async function getAllUsers() {
  const client = (() => {
    const transport = createConnectTransport({
      baseUrl: "http://localhost:8080",
    });
    return createPromiseClient(ChatService, transport);
  })();

  const request = new Empty();
  return await client.getAllUsers(request);
}

export async function joinUser(user:User) {
  const client = (() => {
    const transport = createConnectTransport({
      baseUrl: "http://localhost:8080",
    });
    return createPromiseClient(ChatService, transport);
  })();

  return await client.join(user);
}

export async function getMessages() {
  const client = (() => {
    const transport = createConnectTransport({
      baseUrl: "http://localhost:8080",
    });
    return createPromiseClient(ChatService, transport);
  })();

  const request = new Empty();
  const responseStream = client.receiveMsg(request);

  try {
    for await (const message of responseStream) {
      console.log(message);
    }
  } catch (e) {
    console.error(e);
  }
}


