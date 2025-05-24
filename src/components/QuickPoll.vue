<script setup lang="ts">
import { ref } from 'vue'
import { PollVote } from '../types'

const pollVote = ref<PollVote>(null)
const pollSubmitted = ref(false)

const submitPoll = (vote: PollVote) => {
  pollVote.value = vote
  pollSubmitted.value = true
  setTimeout(() => {
    pollSubmitted.value = false
  }, 3000)
}
</script>

<template>
  <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 card-hover">
    <h3 class="font-semibold mb-3">Enquete Rápida</h3>
    <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Essa atualização foi útil para você?</p>
    
    <div class="flex space-x-4">
      <button @click="submitPoll('yes')" 
              :class="`flex-1 py-2 rounded-lg flex items-center justify-center space-x-2 ${pollVote === 'yes' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-700'}`">
        <font-awesome-icon :icon="['far', 'thumbs-up']" />
        <span>Sim</span>
      </button>
      <button @click="submitPoll('no')" 
              :class="`flex-1 py-2 rounded-lg flex items-center justify-center space-x-2 ${pollVote === 'no' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700'}`">
        <font-awesome-icon :icon="['far', 'thumbs-down']" />
        <span>Não</span>
      </button>
    </div>
    
    <div v-if="pollSubmitted" class="mt-3 text-xs text-green-600 dark:text-green-400">
      <font-awesome-icon icon="check" class="mr-1" /> Obrigado pelo seu feedback!
    </div>
  </section>
</template>