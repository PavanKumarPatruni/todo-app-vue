<script setup>
import AddButton from '@/components/AddButton.vue'
</script>

<template>
  <header class="sticky top-0 z-10" v-once>
    <div class="flex flex-col py-6 px-4 md:px-8 bg-black">
      <div class="flex justify-between items-center">
        <h1 class="text-slate-100 font-bold text-4xl my-4">Taskify</h1>
        <AddButton />
      </div>
      <h4 class="text-slate-400">The Ultimate Online Task Manager</h4>
    </div>
  </header>
</template>
