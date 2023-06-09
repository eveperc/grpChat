// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file chat.proto (package myapp, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message myapp.ChatMessage
 */
export class ChatMessage extends Message<ChatMessage> {
  /**
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * @generated from field: string time = 3;
   */
  time = "";

  constructor(data?: PartialMessage<ChatMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "myapp.ChatMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "time", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessage {
    return new ChatMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessage {
    return new ChatMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessage {
    return new ChatMessage().fromJsonString(jsonString, options);
  }

  static equals(a: ChatMessage | PlainMessage<ChatMessage> | undefined, b: ChatMessage | PlainMessage<ChatMessage> | undefined): boolean {
    return proto3.util.equals(ChatMessage, a, b);
  }
}

/**
 * @generated from message myapp.User
 */
export class User extends Message<User> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "myapp.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

/**
 * @generated from message myapp.Empty
 */
export class Empty extends Message<Empty> {
  constructor(data?: PartialMessage<Empty>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "myapp.Empty";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty {
    return new Empty().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty {
    return new Empty().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty {
    return new Empty().fromJsonString(jsonString, options);
  }

  static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean {
    return proto3.util.equals(Empty, a, b);
  }
}

/**
 * @generated from message myapp.UserList
 */
export class UserList extends Message<UserList> {
  /**
   * @generated from field: repeated myapp.User users = 1;
   */
  users: User[] = [];

  constructor(data?: PartialMessage<UserList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "myapp.UserList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "users", kind: "message", T: User, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserList {
    return new UserList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserList {
    return new UserList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserList {
    return new UserList().fromJsonString(jsonString, options);
  }

  static equals(a: UserList | PlainMessage<UserList> | undefined, b: UserList | PlainMessage<UserList> | undefined): boolean {
    return proto3.util.equals(UserList, a, b);
  }
}

/**
 * @generated from message myapp.JoinResponse
 */
export class JoinResponse extends Message<JoinResponse> {
  /**
   * @generated from field: int32 error = 1;
   */
  error = 0;

  /**
   * @generated from field: string msg = 2;
   */
  msg = "";

  constructor(data?: PartialMessage<JoinResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "myapp.JoinResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "error", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "msg", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinResponse {
    return new JoinResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinResponse {
    return new JoinResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinResponse {
    return new JoinResponse().fromJsonString(jsonString, options);
  }

  static equals(a: JoinResponse | PlainMessage<JoinResponse> | undefined, b: JoinResponse | PlainMessage<JoinResponse> | undefined): boolean {
    return proto3.util.equals(JoinResponse, a, b);
  }
}

/**
 * @generated from message myapp.ReceiveMsgRequest
 */
export class ReceiveMsgRequest extends Message<ReceiveMsgRequest> {
  /**
   * @generated from field: string user = 1;
   */
  user = "";

  constructor(data?: PartialMessage<ReceiveMsgRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "myapp.ReceiveMsgRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReceiveMsgRequest {
    return new ReceiveMsgRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReceiveMsgRequest {
    return new ReceiveMsgRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReceiveMsgRequest {
    return new ReceiveMsgRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReceiveMsgRequest | PlainMessage<ReceiveMsgRequest> | undefined, b: ReceiveMsgRequest | PlainMessage<ReceiveMsgRequest> | undefined): boolean {
    return proto3.util.equals(ReceiveMsgRequest, a, b);
  }
}

