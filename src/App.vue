<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();

const isActive = (path) => computed(() => route.path === path);
const activeLinkClasses = "after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-sky-900 after:absolute relative text-sky-900 font-semibold after:bottom-0 flex flex-col items-center after:-bottom-1.5";
</script>

<template>
  <main class="w-full min-h-screen flex flex-col gap-2.5 font-primary">
    <header class="w-full py-8" role="banner" aria-label="Header">
      <div class="container flex justify-between">
        <h1 class="uppercase font-bold text-5xl font-app-name">jobs app</h1>

        <nav class="flex gap-4 items-center">
          <RouterLink :to="'/'" :class="['text-lg', { [activeLinkClasses]: isActive('/').value }]">Home</RouterLink>
          <RouterLink :to="'/jobs'" :class="['text-lg', { [activeLinkClasses]: isActive('/jobs').value }]">Jobs</RouterLink>
          <RouterLink :to="'/salary-range'" :class="['text-lg', { [activeLinkClasses]: isActive('/salary-range').value }]">Salary range</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer class="container p-4 border-t border-black mt-auto flex justify-center" role="contentinfo" aria-label="Footer">
      <p class="text-sm text-gray-700">&copy; 2024 <a class="underline hover:text-blue-500" href="https://www.linkedin.com/in/stanislav-chyburiak-30450b1b3/" target="_blank">Stanislav Chyburiak</a></p>
    </footer>
  </main>
</template>
