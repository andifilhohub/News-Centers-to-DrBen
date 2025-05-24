<script setup lang="ts">
import { Alert } from '../types'
import { formatTimeAgo } from '../utils/date'

const props = defineProps<{
  alerts: Alert[]
}>()

const emit = defineEmits<{
  (e: 'dismissAlert', alertId: number): void
}>()

const alertClasses = {
  info: 'bg-blue-50 dark:bg-blue-900 border-blue-400 dark:border-blue-600',
  warning: 'bg-yellow-50 dark:bg-yellow-900 border-yellow-400 dark:border-yellow-600',
  error: 'bg-red-50 dark:bg-red-900 border-red-400 dark:border-red-600'
}

const alertIcons = {
  info: 'info-circle text-blue-500 dark:text-blue-400',
  warning: 'exclamation-triangle text-yellow-500 dark:text-yellow-400',
  error: 'times-circle text-red-500 dark:text-red-400'
}
</script>

<template>
  <div class="mb-8 space-y-4" v-if="alerts.length > 0">
    <h2 class="text-xl font-semibold mb-4">Avisos Importantes</h2>
    
    <transition-group name="fade">
      <div v-for="alert in alerts" :key="alert.id" 
            :class="`rounded-lg p-4 border-l-4 ${alertClasses[alert.type]}`">
        <div class="flex items-start">
          <div class="flex-shrink-0 pt-0.5">
            <font-awesome-icon :icon="alertIcons[alert.type].split(' ')[0]" class="text-xl" :class="alertIcons[alert.type].split(' ').slice(1).join(' ')" />
          </div>
          <div class="ml-3 flex-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium">{{ alert.title }}</h3>
              <button @click="emit('dismissAlert', alert.id)" class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <font-awesome-icon icon="times" />
              </button>
            </div>
            <p class="mt-1 text-sm">{{ alert.message }}</p>
            <p class="mt-2 text-xs opacity-75">{{ formatTimeAgo(alert.date) }}</p>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>