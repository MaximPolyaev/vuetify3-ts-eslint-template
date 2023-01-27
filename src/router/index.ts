import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import MainPage from '@/views/pages/MainPage.vue'
import FormPage from '@/views/pages/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'Главная',
          component: MainPage,
        },
        {
          path: '/form',
          name: 'Форма',
          component: FormPage,
        },
      ],
    },
  ],
})

export default router
