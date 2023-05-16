import { useSharedUserId } from '@stores/states';
import {useSharedUsers} from '@stores/states';

//引数のuserIDを持つユーザーをusersから探す
export const findUser = () => {
  const {userId} = useSharedUserId();
  const {users} = useSharedUsers();
  return users.value.find((user) => user.id === userId.value);
}
