<script setup lang="ts">
defineProps<{
  darkMode: boolean
}>()

defineEmits<{
  (e: 'toggleDarkMode'): void
}>()
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <div class="bg-chatwoot-blue text-white p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold">Central de Atualizações</h1>
      </div>
      <div class="flex items-center space-x-4">
        <button @click="$emit('toggleDarkMode')" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <font-awesome-icon v-if="darkMode" icon="sun" class="text-yellow-400" />
          <font-awesome-icon v-else icon="moon" class="text-gray-600" />
        </button>
        <div class="relative">
          <input type="text" placeholder="Buscar atualizações..." 
                 class="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-chatwoot-blue focus:border-chatwoot-blue outline-none transition bg-white dark:bg-gray-700">
          <font-awesome-icon icon="search" class="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
    </div>
  </header>
</template>