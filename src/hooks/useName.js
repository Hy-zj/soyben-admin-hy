import { ref } from 'vue'

export const useName = ()=> {
  const name = ref('')
  const setName = (v) => {
    name.value = v
  }
  return {
    name,
    setName
  }
}