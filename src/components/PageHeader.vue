<script setup lang="ts">
import AddButton from '@/components/AddButton.vue'
</script>

<template>
  <header className="sticky top-0 z-10 shadow-[0_0px_8px_1px_rgba(91,_91,_91,_0.7)]" v-once>
    <div className="flex flex-col py-6 px-4 md:px-8 bg-black">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-100 font-bold text-4xl my-4">Taskify</h1>
        <AddButton />
      </div>
      <h4 className="text-slate-400">The Ultimate Online Task Manager</h4>
    </div>
  </header>
</template>
