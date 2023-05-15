<script setup lang="ts">
import { GreetingService } from './hello_connectweb';
import Input from './components/Input.vue';
import { useSharedText } from './stores/states';
const { text} = useSharedText();



</script>

<template>
  <div id="app">
    text: {{ text }}
  </div>
  <Input />
</template>

