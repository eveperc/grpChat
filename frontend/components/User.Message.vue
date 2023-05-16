<script setup lang="ts">
import ChatService from './ChatService.vue'
import { useSharedMessages } from '../stores/states';

const {messages} = useSharedMessages();
</script>

<template>
  messages: {{messages}}
</template>
