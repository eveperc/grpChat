<script setup lang="ts">
import { ElSelect} from 'element-plus';
import { defineProps} from 'vue'

interface Props {
  value: string
  handleChange: (newValue: string) => void
}
const props = defineProps<Props>()

</script>

<template>
  <el-select
    :model-value="props.value"
    @update:modelValue="props.handleChange"
    placeholder="Select"
  >
  <slot/>
  </el-select>
</template>
