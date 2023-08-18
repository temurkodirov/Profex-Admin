import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue';
import LayoutView from "@/layouts/LayoutView.vue";
import categoriesView from "@/views/categories/CategoriesView.vue";
import MastersView from "@/views/masters/MastersView.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";
import SettingsView from "@/views/settings/SettingsView.vue";
import UsersView from "@/views/users/UsersView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: LayoutView,
      redirect: "dashboard",
      children: [
        {
          path: "categories",
          component : categoriesView
        },
        {
          path: "masters",
          component: MastersView
        },
        {
          path: "dashboard",
          component: DashboardView
        },
        {
          path: "settings",
          component: SettingsView
        },
        {
          path: "users",
          component: UsersView
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: LoginView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
