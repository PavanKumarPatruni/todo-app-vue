<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <main class="min-h-screen relative flex flex-col gap-4 w-full md:max-w-5xl mx-auto px-4 md:px-24">
    <PageHeader />

    <RouterView />
  </main>
</template>
