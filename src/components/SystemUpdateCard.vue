<script setup lang="ts">
import { ref } from 'vue'
import { Update } from '../types'
import { formatTimeAgo } from '../utils/date'

const props = defineProps<{
  update: Update
}>()

const emit = defineEmits<{
  (e: 'vote', vote: 'up' | 'down'): void
}>()

const voted = ref<'up' | 'down' | null>(null)

const typeClasses = {
  new: 'bg-chatwoot-green text-white',
  fix: 'bg-chatwoot-yellow text-white',
  improve: 'bg-chatwoot-blue text-white'
}

const typeIcons = {
  new: 'star',
  fix: 'bug',
  improve: 'bolt'
}

const typeLabels = {
  new: 'Novidade',
  fix: 'Correção',
  improve: 'Melhoria'
}

const handleVote = (value: 'up' | 'down') => {
  if (voted.value === value) {
    voted.value = null
  } else {
    voted.value = value
  }
  emit('vote', value)
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden card-hover">
    <div class="p-5">
      <div class="flex items-start space-x-3">
        <div class="flex-shrink-0">
          <div :class="'h-10 w-10 rounded-full flex items-center justify-center ' + typeClasses[update.type]">
            <font-awesome-icon :icon="typeIcons[update.type]" />
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h3 class="font-semibold">{{ update.title }}</h3>
            <span :class="'text-xs px-2 py-1 rounded-full ' + typeClasses[update.type]">
              {{ typeLabels[update.type] }}
            </span>
          </div>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{{ update.description }}</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xs text-gray-500">{{ formatTimeAgo(update.date) }}</span>
            
            <div class="flex space-x-2">
              <button @click.stop="handleVote('up')" 
                      :class="'px-2 py-1 text-xs rounded ' + (voted === 'up' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-700')">
                <font-awesome-icon :icon="['far', 'thumbs-up']" class="mr-1" />
                {{ update.votes.up }}
              </button>
              <button @click.stop="handleVote('down')" 
                      :class="'px-2 py-1 text-xs rounded ' + (voted === 'down' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700')">
                <font-awesome-icon :icon="['far', 'thumbs-down']" class="mr-1" />
                {{ update.votes.down }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>