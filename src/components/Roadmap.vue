<script setup lang="ts">
import { RoadmapItem } from '../types'
import { formatTimeAgo } from '../utils/date'

defineProps<{
  roadmap: RoadmapItem[]
}>()

const roadmapStatusClasses = {
  released: 'bg-chatwoot-green text-white',
  development: 'bg-chatwoot-blue text-white',
  planned: 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200'
}

const roadmapIcons = {
  released: 'check',
  development: 'code',
  planned: 'lightbulb'
}

const roadmapLabels = {
  released: 'Lançado',
  development: 'Em desenvolvimento',
  planned: 'Planejado'
}

const roadmapBadgeClasses = {
  released: 'text-green-600 dark:text-green-400',
  development: 'text-blue-600 dark:text-blue-400',
  planned: 'text-gray-500 dark:text-gray-400'
}
</script>

<template>
  <section>
    <h2 class="text-xl font-semibold mb-4">Roadmap</h2>
    
    <div class="space-y-3">
      <div v-for="item in roadmap" :key="item.id" 
           class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 card-hover">
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 pt-1">
            <div :class="`h-6 w-6 rounded-full flex items-center justify-center ${roadmapStatusClasses[item.status]}`">
              <font-awesome-icon :icon="roadmapIcons[item.status]" class="text-xs" />
            </div>
          </div>
          <div>
            <h3 class="font-medium text-sm">{{ item.title }}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
            <div class="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
              <span>{{ formatTimeAgo(item.date) }}</span>
              <span class="mx-2">•</span>
              <span :class="roadmapBadgeClasses[item.status]">{{ roadmapLabels[item.status] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>