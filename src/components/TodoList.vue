<script setup>
import { onMounted, computed } from 'vue'
import TodoItem from './TodoItem.vue'

import { useTodoStore } from '@/stores/todoStore'

const store = useTodoStore()
const list = computed(() => store.list)
const fetching = computed(() => store.fetching)

onMounted(() => {
  store.fetchTodos()
})
</script>

<template>
  <h4 v-if="fetching" class="text-center text-slate-300 p-8">loading</h4>
  <ul v-else-if="list.length > 0">
    <li v-for="(data, index) in list" :key="index"><TodoItem :data="data" /></li>
  </ul>
  <h4 v-else class="text-center text-slate-300 p-8">no todos</h4>
</template>
