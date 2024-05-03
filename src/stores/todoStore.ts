import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getAllTodos } from '@/services/getAllTodos'
import type { TFilter } from '@/types'

export const useTodoStore = defineStore('todo', () => {
  const list = ref([])
  const fetching = ref(false)
  async function fetchTodos(filter?: TFilter) {
    fetching.value = true
    const response = await getAllTodos(filter)
    list.value = response.data
    fetching.value = false
  }

  return { list, fetching, fetchTodos }
})
