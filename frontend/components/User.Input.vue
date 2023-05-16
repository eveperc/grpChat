<script lang="ts"  setup>
import ElInput from '@components/Elements/El.Input.vue';
import ElButton from '@components/Elements/El.Button.vue';
import { ChatService } from '@/chat_connectweb';
import { ChatMessage } from '@/chat_pb';
import {
  createConnectTransport,
  createPromiseClient,
} from '@bufbuild/connect-web';

const value = ref('');

const client = (() => {
  const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
  });
  return createPromiseClient(ChatService, transport);
})();

const handleClick = async () => {
  if (value.value === '') {
    return;
  }
  const chatMessage = (() => {
    const chat = new ChatMessage();
    chat.from = 'userName';
    chat.message = value.value;
    chat.time = new Date().toISOString();
    return chat;
  })();
  await client.sendMsg(chatMessage);
};
</script>

<template>
  <ElInput v-model="value"/>
  <ElButton @click="handleClick">送信</ElButton>
</template>
