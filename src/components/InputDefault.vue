<script setup>
const props = defineProps({
  type: String,
  label: String,
  placeholder: String,
  value: String,
  // icon: String,
  id: String,
  class: String,
  wrapper: String,
})
</script>

<template>
  <label :for="props.id" :class="[wrapper, 'h-max']">
    <span v-if="props.label" class="text-white text-base font-semibold">{{ props.label }}</span>

    <input :id="props.id" :type="props.type" :value="props.value" :placeholder="props.placeholder" :class="props.class" />
  </label>
</template>
