import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getAllTodos } from '@/services/getAllTodos'
import type { TFilter, TTodo } from '@/types'

export const useTodoStore = defineStore('todo', () => {
  const list = ref([])
  const allCount = ref(0)
  const completedCount = ref(0)
  const fetching = ref(false)
  async function fetchTodos(filter?: TFilter) {
    fetching.value = true
    const response = await getAllTodos(filter)
    list.value = response.data
    if (filter !== 'ACTIVE' && filter !== 'DONE') {
      allCount.value = list.value.length
      completedCount.value = list.value.filter((item: TTodo) => item.status === 'DONE').length
    }

    fetching.value = false
  }

  return { list, fetching, fetchTodos, allCount, completedCount }
})
