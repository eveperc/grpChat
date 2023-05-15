<script lang="ts" setup>
import { ElInput } from 'element-plus';
import { GreetingService } from '../hello_connectweb';
import {
  createConnectTransport,
  createPromiseClient,
} from '@bufbuild/connect-web';
import { useSharedText } from '../stores/states';

//グローバル変数
const { text, setText } = useSharedText();
//ローカル変数
const value = useState('value', () => (''))

const client = (()=>{
  const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
  });
  return createPromiseClient(GreetingService, transport);
})();

const handleClick = async () => {
  setText(value.value)
  const res = await client.hello({ name: text.value });
  console.log(res);
}

</script>

<template>
  <el-input v-model="value"></el-input>
  <button @click="handleClick">送信</button>
</template>
