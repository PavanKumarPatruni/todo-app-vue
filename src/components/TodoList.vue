<script setup lang="ts">
import { onMounted, computed } from 'vue'
import TodoItem from './TodoItem.vue'
import FilterView from './FilterView.vue'

import { useTodoStore } from '@/stores/todoStore'
import type { TFilter } from '@/types'

const store = useTodoStore()
const list = computed(() => store.list)
const fetching = computed(() => store.fetching)

onMounted(() => {
  store.fetchTodos()
})

const onChange = (value: TFilter) => {
  store.fetchTodos(value)
}
</script>

<template>
  <div className="flex flex-col divide-y shadow-[0_0px_8px_1px_rgba(91,_91,_91,_0.7)]">
    <div className="min-h-[400px] relative">
      <h4
        v-if="fetching"
        class="font-medium text-base text-center leading-loose tracking-wider p-8"
      >
        LOADING
      </h4>
      <ul v-else-if="list.length > 0">
        <li v-for="(data, index) in list" :key="index"><TodoItem :data="data" /></li>
      </ul>
      <h4 v-else class="font-medium text-base text-center leading-loose tracking-wider p-8">
        NO TODOS
      </h4>
    </div>

    <FilterView @change="onChange" />
  </div>
</template>
