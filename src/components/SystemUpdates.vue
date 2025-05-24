<script setup lang="ts">
import { ref, computed } from 'vue'
import { Update, UpdateFilter } from '../types'
import SystemUpdateCard from './SystemUpdateCard.vue'

const props = defineProps<{
  updates: Update[]
}>()

const emit = defineEmits<{
  (e: 'vote', id: number, vote: 'up' | 'down'): void
}>()

const updateFilter = ref<UpdateFilter>('all')

const filteredUpdates = computed(() => {
  if (updateFilter.value === 'all') return props.updates
  return props.updates.filter(u => u.type === updateFilter.value)
})

const filterUpdates = (filter: UpdateFilter) => {
  updateFilter.value = filter
}
</script>

<template>
  <section>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold">Novidades do Sistema</h2>
      <div class="flex space-x-2">
        <button @click="filterUpdates('all')" :class="`px-3 py-1 text-sm rounded-full ${updateFilter === 'all' ? 'bg-chatwoot-blue text-white' : 'bg-gray-100 dark:bg-gray-700'}`">
          Todas
        </button>
        <button @click="filterUpdates('new')" :class="`px-3 py-1 text-sm rounded-full ${updateFilter === 'new' ? 'bg-chatwoot-green text-white' : 'bg-gray-100 dark:bg-gray-700'}`">
          Novidades
        </button>
        <button @click="filterUpdates('fix')" :class="`px-3 py-1 text-sm rounded-full ${updateFilter === 'fix' ? 'bg-chatwoot-yellow text-white' : 'bg-gray-100 dark:bg-gray-700'}`">
          Correções
        </button>
        <button @click="filterUpdates('improve')" :class="`px-3 py-1 text-sm rounded-full ${updateFilter === 'improve' ? 'bg-chatwoot-blue text-white' : 'bg-gray-100 dark:bg-gray-700'}`">
          Melhorias
        </button>
      </div>
    </div>
    
    <div class="space-y-4">
      <transition-group name="fade">
        <SystemUpdateCard 
          v-for="update in filteredUpdates" 
          :key="update.id"
          :update="update"
          @vote="(vote) => emit('vote', update.id, vote)"
        />
      </transition-group>
    </div>
  </section>
</template>