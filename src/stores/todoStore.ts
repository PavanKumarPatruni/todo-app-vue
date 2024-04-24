import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getAllTodos } from '@/services/getAllTodos'

export const useTodoStore = defineStore('todo', () => {
  const list = ref([])
  const fetching = ref(false)
  async function fetchTodos() {
    fetching.value = true
    const response = await getAllTodos()
    list.value = response.data
    fetching.value = false
  }

  return { list, fetching, fetchTodos }
})
