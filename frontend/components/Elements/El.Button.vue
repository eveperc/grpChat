<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { defineProps } from 'vue';

interface Props {
  handleClick?: () => void;
}
const props = withDefaults(defineProps<Props>(), {
  handleClick: () => undefined,
})
</script>

<template>
  <el-button type="primary" @click="props.handleClick">送信</el-button>
</template>
