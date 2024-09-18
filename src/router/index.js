import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefault from '@/components/LayoutDefault.vue'
import HomeView from '../views/HomeView.vue'
import MealsByName from '@/views/MealsByName.vue'
import MealsByLetter from '@/views/MealsByLetter.vue'
import MealsByIngredients from '@/views/MealsByIngredients.vue'
import GuestLayout from '@/components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '@/views/Ingredient.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutDefault,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: MealsByName
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: MealsByLetter
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: Ingredients,
        },
        {
          path: '/by-ingredient/:ingredient?',
          name: 'byIngredient',
          component: MealsByIngredients
        },
        {
          path: 'meal/:id',
          name: 'mealDetails',
          component: MealDetails
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayout
    }
  ]
})

export default router
