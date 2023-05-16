import type { Ref } from 'vue'
import {User} from '@/chat_pb'

export const setUsers = (users: Ref<User[]>) => (value: User[]) => {
  users.value = value;
}
export const useSharedUsers = () => {
  const value = useState('users', () => ([]as User[]))
  return {
    users: readonly(value),
    setUsers: setUsers(value)
  }
}

export const setUserId = (id: Ref<string>) => (value: string) => {
  id.value = value;
}
export const useSharedUserId = () => {
  const value = useState('userId', () => (''))
  return {
    userId: readonly(value),
    setUserId: setUserId(value)
  }
}

export const setText = (text: Ref<string>) => (value: string) => {
  text.value = value;
}
export const useSharedText = () => {
  const value = useState('text', () => ('aaa'))
  return {
    text: readonly(value),
    setText: setText(value)
  }
}

export  const setMessages = (messages: Ref<string[]>) => (value: string[]) => {
  messages.value = value;
}
export const useSharedMessages = () => {
  const value = useState('messages', () => ([]))
  return {
    messages: readonly(value),
    setMessages: setMessages(value)
  }
}
