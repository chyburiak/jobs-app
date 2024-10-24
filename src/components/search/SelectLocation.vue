<script setup>
import { useLocation } from "@/stores/useLocation.js";

const locations = useLocation().countries;
</script>

<template>
  <label for="location">
    <select name="location" id="location">
      <option v-for="location in locations" :key="location.code" :value="location.code">{{ location.name }}</option>
    </select>
  </label>
</template>
