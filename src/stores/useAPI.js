import { defineStore } from 'pinia'
export const useAPI = defineStore('API', {
  state: () => {
    return {
      options: {
        method: 'GET',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          'x-rapidapi-host': import.meta.env.VITE_HOST_URL,
        },
      },
    }
  },
  actions: {
    async fetchData(url) {
      try {
        const response = await fetch(url, this.options)
        return await response.json()
      } catch (error) {
        console.error(error)
        return error
      }
    },
  },
})
