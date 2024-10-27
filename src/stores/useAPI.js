import { defineStore } from 'pinia'

export const useAPI = defineStore('API', {
  state: () => ({
    options: {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_HOST_URL,
      },
    },
    jobs: [],
    loading: false,
    error: null,
    searchAttempted: false, // Track if a search has been attempted
  }),
  getters: {
    hasJobs: state => state.jobs.length > 0,
    isLoading: state => state.loading,
    hasError: state => state.error !== null,
    errorText: state => state.error,
    hasSearchAttempted: state => state.searchAttempted, // Getter renamed
  },
  actions: {
    async fetchJobs(query, location) {
      this.loading = true
      this.error = null
      this.jobs = []
      this.searchAttempted = true // Mark that a search has been attempted

      try {
        const url = `https://${import.meta.env.VITE_HOST_URL}/list?query=${query}&location=${location}&language=en_GB`
        const response = await fetch(url, this.options)
        const data = await response.json()
        this.jobs = data.jobs || [] // Ensure it sets an empty array if no jobs found
      } catch (error) {
        this.error =
          'Something went wrong. Try again or contact admin to solve an issue.'
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
})
