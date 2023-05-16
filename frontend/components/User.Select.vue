<script lang="ts" setup>
import { getAllUsers } from '@services/ChatService'
import ElSelect from '@components/Elements/El.Select.vue'
import { useSharedUserId } from '@stores/states'
const { userId, setUserId } = useSharedUserId();
import { useSharedUsers } from '@stores/states';
const { users, setUsers } = useSharedUsers();

await getAllUsers()
  .then((res) => {
    setUsers(res.users);
  }).catch((err) => {
    console.log(err)
    return undefined;
  })

const handleChange = (newValue: string) => {
  setUserId(newValue)
}
</script>

<template>
  <ElSelect :value="userId" :handleChange="handleChange">
    <el-option v-for="item in users" :key="item.id" :label="item.name" :value="item.id" />
  </ElSelect>
</template>
