<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  label: String,
  id: String,
  class: String,
  wrapper: String,
  placeholder: String,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label :for="props.id" :class="[wrapper, 'h-max']">
    <span v-if="props.label" class="text-white text-base font-semibold">{{
      props.label
    }}</span>

    <input
      :id="props.id"
      :type="props.type"
      :value="props.modelValue"
      @input="event => emit('update:modelValue', event.target.value)"
      :placeholder="props.placeholder"
      :class="props.class"
    />
  </label>
</template>
