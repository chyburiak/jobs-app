import { defineStore } from 'pinia'

export const useLocation = defineStore('location', {
  state: () => {
    return {
      countries: [
        { "code": "All", "name": "Any" },
        { "code": "AT", "name": "Austria" },
        { "code": "BE", "name": "Belgium" },
        { "code": "BG", "name": "Bulgaria" },
        { "code": "CA", "name": "Canada" },
        { "code": "CY", "name": "Cyprus" },
        { "code": "CZ", "name": "Czech Republic" },
        { "code": "DK", "name": "Denmark" },
        { "code": "EE", "name": "Estonia" },
        { "code": "FI", "name": "Finland" },
        { "code": "FR", "name": "France" },
        { "code": "DE", "name": "Germany" },
        { "code": "GR", "name": "Greece" },
        { "code": "HR", "name": "Croatia" },
        { "code": "IE", "name": "Ireland" },
        { "code": "IT", "name": "Italy" },
        { "code": "LV", "name": "Latvia" },
        { "code": "LT", "name": "Lithuania" },
        { "code": "LU", "name": "Luxembourg" },
        { "code": "MT", "name": "Malta" },
        { "code": "NL", "name": "Netherlands" },
        { "code": "PL", "name": "Poland" },
        { "code": "PT", "name": "Portugal" },
        { "code": "RO", "name": "Romania" },
        { "code": "SK", "name": "Slovakia" },
        { "code": "SI", "name": "Slovenia" },
        { "code": "ES", "name": "Spain" },
        { "code": "SE", "name": "Sweden" },
        { "code": "UA", "name": "Ukraine" },
        { "code": "GB", "name": "United Kingdom" },
        { "code": "US", "name": "United States" }
      ]
    }
  }
})
