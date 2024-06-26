<script setup lang="ts">
import { computed, type PropType } from 'vue'

import EditButton from '@/components/EditButton.vue'

import { useTodoStore } from '@/stores/todoStore'

import { deleteTodo } from '@/services/deleteTodo'
import { updateTodo } from '@/services/updateTodo'
import type { TTodo, TStatus } from '@/types'
import router from '@/router'

const store = useTodoStore()

const props = defineProps({
  data: Object as PropType<TTodo>
})

const typeClass = computed(() => {
  switch (props?.data?.type) {
    case 'CODING':
      return 'bg-red-300 text-red-950'
    case 'GOALS':
      return 'bg-yellow-300 text-yellow-950'
    case 'GROCERIES':
      return 'bg-emerald-300 text-emerald-950'
    case 'SHOPPING':
      return 'bg-blue-300 text-blue-950'
    case 'WORKOUT':
      return 'bg-pink-300 text-pink-950'
    default:
      return 'bg-purple-300 text-purple-950'
  }
})

const todoClass = computed(() => {
  if (props?.data?.status === 'DONE') return 'text-slate-500 line-through'

  return 'text-slate-100'
})

const onUpdate = () => {
  store.fetchTodos()
}

const triggerUpdateApi = async ({ status }: { status: TStatus }) => {
  if (!props.data) return

  const { id, todo, type } = props.data
  await updateTodo({ id, todo, type, status })
  onUpdate()
}

const onDeleteClick = async () => {
  if (!props.data) return

  await deleteTodo(props.data.id)
  onUpdate()
}

const onResetClick = () => {
  triggerUpdateApi({ status: 'ACTIVE' })
}

const onDoneClick = () => {
  triggerUpdateApi({ status: 'DONE' })
}

const onViewClick = () => {
  if (!props.data) return

  router.push(`/todo/${props.data.id}`)
}

const onClick = () => {
  if (!props.data) return

  props.data.status === 'DONE' ? onResetClick() : onDoneClick()
}
</script>

<template>
  <div class="flex items-center justify-between p-4">
    <div class="flex items-center gap-4 cursor-pointer" @click="onClick">
      <transition name="fade">
        <template v-if="data?.status === 'ACTIVE'">
          <img src="@/assets/icons/radio_unchecked.svg" width="24" height="24" alt="done" />
        </template>
        <template v-else>
          <img src="@/assets/icons/radio_checked.svg" width="24" height="24" alt="reset" />
        </template>
      </transition>
      <span
        :class="
          'w-[64px] font-medium text-[9px] text-center leading-loose tracking-wider px-1 rounded ' +
          typeClass
        "
      >
        {{ data?.type }}
      </span>
      <span :class="todoClass">{{ data?.todo }}</span>
    </div>
    <div class="flex items-center gap-4">
      <button @click="onViewClick">View</button>
      <transition name="fade">
        <template v-if="data?.status === 'ACTIVE'">
          <EditButton :data="data" />
        </template>
      </transition>
      <button @click="onDeleteClick">
        <img src="@/assets/icons/delete.svg" width="24" height="24" alt="delete" />
      </button>
    </div>
  </div>
</template>
