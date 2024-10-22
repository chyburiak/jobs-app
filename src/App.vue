<script setup>
import AppHeader from '@/components/AppHeader.vue';
import HomeView from '@/views/HomeView.vue'
import AppFooter from '@/components/AppFooter.vue';

const apiKey = import.meta.env.VITE_API_KEY;
</script>

<template>
  <main class="w-full min-h-screen flex flex-col gap-2.5 font-primary">
    <AppHeader />

    <HomeView />

    <AppFooter />
  </main>
</template>
