<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const id = route.query.id
</script>

<template>
  <div class="container">
    <RouterLink :to="'/jobs'" class="text-blue-600">back</RouterLink>
    <h1>Job ID is: {{ id }}</h1>
  </div>
</template>
