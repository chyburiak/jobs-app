<script setup>

</script>

<template>
  <header class="bg-sky-100 shadow-md" role="banner" aria-label="Header">
    <div class="flex justify-between gap-4 p-4">
      <div role="img" aria-label="Jobs App Logo">
        <img src="@/assets/icons/logo.svg" alt="Jobs App Logo" width="50" height="50">
      </div>

      <div>
        <label for="search">
          <input id="search" type="text">

          <button type="submit">Find</button>
        </label>
      </div>
    </div>
  </header>
</template>

