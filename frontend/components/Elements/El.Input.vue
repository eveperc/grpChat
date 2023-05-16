<script setup lang="ts">
import { ElInput } from 'element-plus';
import {defineProps} from 'vue';

const props = defineProps({
  value:String,
})
const emit = defineEmits(['update:value'])

const updateValue = (value:string) => {
  emit('update:value',value)
}

</script>

<template>
  <el-input :value="value" @input="updateValue"></el-input>
</template>
