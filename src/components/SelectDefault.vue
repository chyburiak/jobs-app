<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Object,
  label: String,
  value: Array,
  id: String,
})

const emit = defineEmits(['update:modelValue'])
const selectVisible = ref(false)
const selectedText = ref('Any')
const selectRef = ref(null)

function bindSelect() {
  selectVisible.value = !selectVisible.value
}

function pickValue(location) {
  selectedText.value = location.name
  selectVisible.value = false
  emit('update:modelValue', location)
}

function handleClickOutside(event) {
  if (selectRef.value && !selectRef.value.contains(event.target)) {
    selectVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <label :for="props.id" class="relative">
    <span class="text-white text-base font-semibold" v-if="props.label">
      {{ props.label }}
    </span>

    <div ref="selectRef" class="js-select relative w-48">
      <span
        class="py-1 px-4 rounded bg-white block cursor-pointer"
        @click.prevent="bindSelect"
        >{{ selectedText }}</span
      >

      <div
        v-show="selectVisible"
        class="scrollbar flex flex-col absolute left-0 mt-2 bg-white rounded w-full max-h-40vh overflow-y-scroll border-2 border-gray-400"
      >
        <span
          class="hover:bg-gray-400 py-1 px-4 cursor-pointer"
          @click="() => pickValue(location)"
          v-for="location in props.value"
          :key="location.code"
          >{{ location.name }}</span
        >
      </div>
    </div>

    <select
      class="hidden"
      :name="props.id"
      :id="props.id"
      :value="props.modelValue"
      @change="event => emit('update:modelValue', event.target.value)"
    >
      <option
        v-for="location in props.value"
        :key="location.code"
        :value="location"
      >
        {{ location.name }}
      </option>
    </select>
  </label>
</template>
