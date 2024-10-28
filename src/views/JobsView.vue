<script setup>
import { useAPI } from '@/stores/useAPI.js'
import JobSearchBar from '@/components/search/JobSearchBar.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const api = useAPI

const data = ref(null)
const error = ref(null)

fetch(`https://${}`)
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err))

const fakeJobList = [
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    company: 'Google',
    datePosted: '2021-09-01',
    id: 0,
  },
  {
    title: 'Frontend Engineer',
    location: 'San Francisco, CA',
    company: 'Facebook',
    datePosted: '2023-09-01',
    id: 1,
  },
  {
    title: 'Marketing Specialist',
    location: 'San Francisco, CA',
    company: 'Meta',
    datePosted: '2024-08-01',
    id: 2,
  },
  {
    title: 'Hardware Engineer',
    location: 'San Francisco, CA',
    company: 'Microsoft',
    datePosted: '2021-09-01',
    id: 3,
  },
  {
    title: 'QA Engineer',
    location: 'San Francisco, CA',
    company: 'Google',
    id: 4,
  },
]
</script>

<template>
  <JobSearchBar />

  <section class="container py-8 flex flex-col gap-4">
    <div
      v-for="job in fakeJobList"
      :key="job.id"
      class="flex justify-between items-center gap-4 py-6 px-8 border-4 border-sky-700 rounded-lg transition-all duration-500 ease-in-out hover:border-sky-400 group/job"
    >
      <div class="flex flex-col">
        <h2 class="font-bold text-2xl">{{ job.title }}</h2>
        <p class="text-lg">{{ job.company }}</p>
      </div>

      <RouterLink
        :to="'/jobs/single?id=' + job.id"
        class="bg-sky-700 hover:bg-sky-500 group-hover/job:bg-sky-500 transition-all duration-500 ease-in-out h-max w-max rounded-md text-white font-bold px-4 py-2"
        >More Details</RouterLink
      >
    </div>
  </section>
</template>
