import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue'
import SalaryRangeView from '../views/SalaryRangeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/salary-range',
      name: 'salary-range',
      component: SalaryRangeView
    },
  ]
})

export default router
