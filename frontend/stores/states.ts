import type { Ref } from 'vue'

export const setText = (text: Ref<string>) => (value: string) => {
  text.value = value
}

export const useSharedText = () => {
  const value = useState('text', () => ('aaa'))
  return {
    text: readonly(value),
    setText: setText(value)
  }
}
export const inc = (counter: Ref<number>) => () => counter.value++;
export const dec = (counter: Ref<number>) => () => counter.value--;

export const useNotSharedCounter = () => {
  const counter = useState('counter', () => (0))
  return {
    counter: readonly(counter),
    inc: inc(counter),
    dec: dec(counter)
  }
}
