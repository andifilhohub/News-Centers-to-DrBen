<script setup lang="ts">
import { UsefulLink } from '../types'

defineProps<{
  links: UsefulLink[]
}>()
</script>

<template>
  <section>
    <h2 class="text-xl font-semibold mb-4">Links Úteis</h2>
    
    <div class="grid grid-cols-2 gap-3">
      <a v-for="link in links" :key="link.url" :href="link.url" 
         class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-center space-x-3 card-hover hover:bg-gray-50 dark:hover:bg-gray-700 transition">
        <div :class="`h-8 w-8 rounded-lg ${link.color} text-white flex items-center justify-center`">
          <font-awesome-icon :icon="link.icon" />
        </div>
        <span class="text-sm font-medium">{{ link.title }}</span>
      </a>
    </div>
  </section>
</template>