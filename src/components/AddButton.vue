<script setup>
import { ref } from 'vue'
import ModalView from '@/components/ModalView.vue'
import TodoModal from '@/components/TodoModal.vue'

const showModal = ref(false)
</script>

<template>
  <div>
    <button
      @click="showModal = true"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add
    </button>

    <ModalView :show="showModal" @close="showModal = false">
      <template #content>
        <TodoModal @cancel="showModal = false" />
      </template>
    </ModalView>
  </div>
</template>
