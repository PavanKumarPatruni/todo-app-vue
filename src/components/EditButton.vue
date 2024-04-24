<script setup>
import { ref, defineProps } from 'vue'

import ModalView from '@/components/ModalView.vue'
import TodoModal from '@/components/TodoModal.vue'

const showModal = ref(false)

defineProps({
  data: Object
})
</script>

<template>
  <div>
    <button @click="showModal = true">
      <img src="@/assets/icons/edit.svg" width="24" height="24" alt="edit" />
    </button>

    <ModalView :show="showModal" @close="showModal = false">
      <template #content>
        <TodoModal @cancel="showModal = false" :data="data" />
      </template>
    </ModalView>
  </div>
</template>
