<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import { ref, computed } from 'vue'
const filter = ref('ALL')

const store = useTodoStore()
const allCount = computed(() => store.allCount)
const completedCount = computed(() => store.completedCount)

const emit = defineEmits(['change'])

const onClick = (event: Event) => {
  const { name } = event?.target as HTMLButtonElement
  filter.value = name
  emit('change', name)
}
</script>

<template>
  <div class="sticky bottom-0 bg-black p-4 flex items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <button
        name="ALL"
        class="rounded-md px-4 py-1 text-stone-400 text-sm"
        :class="filter === 'ALL' ? 'border border-stone-400' : ''"
        @click="onClick"
      >
        ALL
      </button>
      <button
        name="ACTIVE"
        class="rounded-md px-4 py-1 text-stone-400 text-sm"
        :class="filter === 'ACTIVE' ? 'border border-stone-400' : ''"
        @click="onClick"
      >
        ACTIVE
      </button>
      <button
        name="DONE"
        class="rounded-md px-4 py-1 text-stone-400 text-sm"
        :class="filter === 'DONE' ? 'border border-stone-400' : ''"
        @click="onClick"
      >
        COMPLETED
      </button>
    </div>
    <div class="flex items-center gap-4">Completed: {{ completedCount }} / {{ allCount }}</div>
  </div>
</template>
