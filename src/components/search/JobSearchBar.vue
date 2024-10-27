<script setup>
import { ref, computed } from 'vue'
import { useAPI } from '@/stores/useAPI.js'
import { useLocation } from '@/stores/useLocation.js'
import SelectDefault from '@/components/SelectDefault.vue'
import InputDefault from '@/components/InputDefault.vue'

const api = useAPI()
const locations = useLocation().countries
const jobTitle = ref('')
const jobLocation = ref(locations[0])

const hasJobs = computed(() => api.hasJobs)
const isLoading = computed(() => api.isLoading)
const hasError = computed(() => api.hasError)
const errorText = computed(() => api.errorText)
const hasSearchAttempted = computed(() => api.hasSearchAttempted) // Using the renamed getter

function sendRequest() {
  if (jobTitle.value !== '') {
    api.fetchJobs(jobTitle.value, jobLocation.value.code)
  } else {
    console.log('No job title entered')
  }
}
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
  <section>
    <div v-if="isLoading" class="text-blue-500 text-center">Loading...</div>
    <div v-else-if="hasError" class="text-red-500 text-center">
      {{ errorText }}
    </div>
    <div v-else-if="hasSearchAttempted && hasJobs">
      <ul>
        <li class="divide-black" v-for="(job, index) in api.jobs" :key="index">
          <h3>{{ job.title }}</h3>
          <p>{{ job.company }}</p>
        </li>
      </ul>
    </div>
    <div v-else-if="hasSearchAttempted" class="text-center">
      No job found. Try again.
    </div>
  </section>
</template>
