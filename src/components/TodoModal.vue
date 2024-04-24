<script setup>
import { ref, defineEmits } from 'vue'

import DropdownView from './DropdownView.vue'

import { addTodo } from '@/services/addTodo'
import { updateTodo } from '@/services/updateTodo'

import { useTodoStore } from '@/stores/todoStore'

import { TYPES } from '@/constants/todo'

const emit = defineEmits(['cancel'])
const onCancel = () => {
  emit('cancel')
}

const store = useTodoStore()
const props = defineProps({
  data: Object
})
const types = ref(TYPES)
const todoText = ref(props?.data?.todo || '')
const todoType = ref(props?.data?.type || '')

const onChange = (event) => {
  todoText.value = event.target.value
}

const refreshList = () => {
  store.fetchTodos()
  onCancel()
}

const onAdd = async () => {
  await addTodo({ todo: todoText.value, type: todoType.value })
  refreshList()
}

const onUpdate = async () => {
  await updateTodo({
    id: props.data.id,
    status: props.data.status,
    todo: todoText.value,
    type: todoType.value
  })
  refreshList()
}

const onClick = () => {
  if (props.data) {
    onUpdate()
    return
  }

  onAdd()
}

const onDropdownChange = (data) => {
  todoType.value = data
}
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h4 class="text-slate-900 font-bold text-xl">
      {{ data ? 'Update ToDo' : 'Add ToDo' }}
    </h4>
    <input
      class="border p-2 text-black rounded-lg"
      type="text"
      placeholder="Write here!"
      @input="onChange"
      v-model="todoText"
    />
    <DropdownView
      :list="types"
      title="Select Type"
      @change="onDropdownChange"
      :selected="todoType"
    />
    <div class="flex justify-end items-center gap-2">
      <button class="bg-slate-300 text-black px-4 py-2 rounded-lg" @click="onCancel">Cancel</button>
      <button class="bg-blue-700 px-4 py-2 rounded-lg" @click="onClick">
        {{ data ? 'Update' : 'Add' }}
      </button>
    </div>
  </div>
</template>
