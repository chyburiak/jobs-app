<script setup>
import { ref } from 'vue'

import { useLocation } from '@/stores/useLocation.js'
import SelectDefault from '@/components/SelectDefault.vue'
import InputDefault from '@/components/InputDefault.vue'

const locations = useLocation().countries
const jobTitle = ref('')
const jobLocation = ref(locations[0])
</script>

<template>
  <section class="w-full bg-sky-700 py-10">
    <div class="container flex justify-center gap-4 items-end">
      <InputDefault
        v-model="jobTitle"
        type="text"
        label="Job Title"
        class="w-full py-1 px-4 rounded bg-white focus:outline-none focus:bg-white"
        :wrapper="'w-48'"
      />
      <SelectDefault
        v-model="jobLocation"
        label="Location"
        :value="locations"
      />
      <InputDefault
        @click="sendRequest"
        type="submit"
        value="Find"
        class="w-max py-1 px-6 cursor-pointer rounded text-white bg-sky-950 hover:bg-blue-400 hover:text-sky-950 font-semibold transition-all duration-500 ease-in-out"
      />
    </div>
  </section>
</template>
