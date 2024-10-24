<script setup>
import {ref} from "vue";

const props = defineProps({
  label: String,
  value: Array,
})

// const selected = ref({'all': 'Any'});
function bindSelect(event) {
  event.currentTarget.closest("div").querySelector("div").classList.toggle("hidden");
}

function pickValue(event) {
  const wrapper = event.currentTarget.closest(".js-select");
  const parent = event.currentTarget.closest("div");

  wrapper.querySelector("span").innerHTML = event.currentTarget.innerText;
  parent.classList.add("hidden");
}
</script>

<template>
  <label :for="props.id" class="relative">
    <span class="text-white text-base font-semibold" v-if="props.label">{{ props.label }}</span>

    <div class="js-select relative w-48">
      <span class="py-1 px-4 rounded bg-white block cursor-pointer" @click="bindSelect">Any</span>

      <div class="scrollbar flex flex-col hidden absolute left-0 mt-2 bg-white rounded w-full max-h-40vh overflow-y-scroll border-2 border-gray-400">
        <span class="hover:bg-gray-400 py-1 px-4 cursor-pointer" @click="pickValue" v-for="location in props.value" :key="location.code" :value="location.code">{{ location.name }}</span>
      </div>
    </div>

    <select class="hidden" :name="props.id" :id="props.id">
      <option v-for="location in props.value" :key="location.code" :value="location.code">{{ location.name }}</option>
    </select>
  </label>
</template>
