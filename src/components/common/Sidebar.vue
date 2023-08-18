<script setup lang="ts">
import IconDashbord from "../icons/IconDashbord.vue";
import IconCategories from "../icons/IconCategories.vue";
import IconMasters from "..//icons/IconMasters.vue";
import IconUsers from "../icons/IconUsers.vue";
import IconSettings from "../icons/IconSettings.vue";
</script>
<template>
<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <RouterLink to="/dashboard">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconDashbord></IconDashbord>
                  <span class="ml-3">Dashboard</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="categories">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconCategories></IconCategories>
                  <span class="flex-1 ml-3 whitespace-nowrap">Categories</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="masters">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconMasters></IconMasters>
                  <span class="flex-1 ml-3 whitespace-nowrap">Masters</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="users">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconUsers></IconUsers>
                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="settings">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconSettings></IconSettings>
                  <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
               </div>
            </RouterLink>
         </li>
      </ul>
   </div>
</aside>
</template>