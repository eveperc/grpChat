<script setup lang="ts">
import 'element-plus/dist/index.css'
import UserInput from './components/User.Input.vue';
import UserSelect from './components/User.Select.vue';
import {findUser} from '@utils/user.function';
import {useSharedUserId} from '@stores/states'
const {userId} = useSharedUserId();

const user = findUser();
</script>

<template>
  <div v-if="!userId">
    ユーザーを選択してください。
    <UserSelect/>
  </div>
  <div v-if="userId">
    User : {{user?.name}}
    <UserInput />
  </div>
</template>

