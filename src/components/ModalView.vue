<script setup lang="ts">
defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 min-w-screen min-h-screen justify-center flex items-center"
  >
    <div
      class="fixed inset-0 z-[51] min-w-screen min-h-screen overflow-y-auto overflow-x-hidden bg-black/80 cursor-pointer pointer-events-none"
    />
    <div class="shadow-xl z-[52] w-full md:w-[400px] bg-white rounded-lg p-8 relative">
      <slot name="content"></slot>
      <button
        @click="closeModal"
        class="bg-white shadow-lg hover:bg-gray-100 p-2 rounded-full absolute -top-2 -right-2"
      >
        <img src="@/assets/icons/close.svg" class="icon" alt="Close Modal" />
      </button>
    </div>
  </div>
</template>
