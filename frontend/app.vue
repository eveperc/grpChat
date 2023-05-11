<script>
import { HelloRequest } from './hello_pb';
import GreetingService from './hello_connectweb';

// GreetingServiceを使ってサーバーと通信する
const service = GreetingService;
// リクエストを作成する
const request = new HelloRequest();
request.name = 'Vue.js';

//ボタンがクリックされたらconsole.log
export default {
  methods: {
    handleClick() {
      console.log(true);
    },
  },
};
</script>

<template>
  <div>
    <button @click="handleClick">Click me</button>
  </div>
</template>
