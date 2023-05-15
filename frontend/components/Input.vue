<script lang="ts" setup>
import { ElInput } from 'element-plus';
import { GreetingService } from '../hello_connectweb';
import {
  createConnectTransport,
  createPromiseClient,
} from '@bufbuild/connect-web';

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});
const client = createPromiseClient(GreetingService, transport);

import { useSharedText } from '../stores/states';
const { text, setText } = useSharedText();

const value = useState('value', () => (''))

const handleClick = async () => {
  setText(value.value)
  const res = await client.hello({ name: text.value});
  console.log(res);
}

</script>

<template>
  <el-input v-model="value"></el-input>
  <button @click="handleClick">送信</button>
</template>
