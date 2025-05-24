<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Header from './components/Header.vue'
import AlertList from './components/AlertList.vue'
import SystemUpdates from './components/SystemUpdates.vue'
import TeamMessage from './components/TeamMessage.vue'
import Roadmap from './components/Roadmap.vue'
import QuickPoll from './components/QuickPoll.vue'
import UsefulLinks from './components/UsefulLinks.vue'
import { Alert, Update, RoadmapItem, UsefulLink } from './types'

// Dark mode toggle
const darkMode = ref(false)

onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', String(darkMode.value))
  document.documentElement.classList.toggle('dark')
}

// Alert system
const alerts = ref<Alert[]>([
  {
    id: 1,
    type: 'warning',
    title: 'Manutenção programada',
    message: 'Haverá uma manutenção no sistema no próximo sábado (10/06) entre 00:00 e 02:00. O sistema pode ficar indisponível durante este período.',
    date: new Date(Date.now() - 3600000 * 3) // 3 hours ago
  },
  {
    id: 2,
    type: 'info',
    title: 'Nova documentação disponível',
    message: 'Atualizamos nossa documentação com novos guias e tutoriais. Confira na seção de Links Úteis.',
    date: new Date(Date.now() - 3600000 * 24) // 24 hours ago
  }
])

// System updates
const updates = ref<Update[]>([
  {
    id: 1,
    type: 'new',
    title: 'Integração com WhatsApp Business',
    description: 'Agora você pode conectar sua conta do WhatsApp Business diretamente ao DRBen para gerenciar todas as conversas em um só lugar.',
    date: new Date(Date.now() - 3600000 * 2), // 2 hours ago
    votes: {
      up: 24,
      down: 2
    }
  },
  {
    id: 2,
    type: 'fix',
    title: 'Correção no envio de arquivos',
    description: 'Resolvemos um problema onde arquivos maiores que 10MB não eram enviados corretamente em algumas conversas.',
    date: new Date(Date.now() - 3600000 * 12), // 12 hours ago
    votes: {
      up: 15,
      down: 1
    }
  },
  {
    id: 3,
    type: 'improve',
    title: 'Dashboard otimizado',
    description: 'Melhoramos o desempenho do dashboard principal, reduzindo o tempo de carregamento em até 40%.',
    date: new Date(Date.now() - 3600000 * 24 * 2), // 2 days ago
    votes: {
      up: 32,
      down: 3
    }
  },
  {
    id: 4,
    type: 'new',
    title: 'Novos templates de resposta',
    description: 'Adicionamos 15 novos templates pré-configurados para agilizar seu atendimento ao cliente.',
    date: new Date(Date.now() - 3600000 * 24 * 3), // 3 days ago
    votes: {
      up: 18,
      down: 0
    }
  }
])

// Roadmap
const roadmap = ref<RoadmapItem[]>([
  {
    id: 1,
    status: 'released',
    title: 'Integração com Instagram',
    description: 'Gerenciamento de mensagens diretas do Instagram',
    date: new Date(Date.now() - 3600000 * 24 * 5) // 5 days ago
  },
  {
    id: 2,
    status: 'development',
    title: 'Relatórios avançados',
    description: 'Novos gráficos e métricas para análise de desempenho',
    date: new Date(Date.now() + 3600000 * 24 * 7) // in 7 days
  },
  {
    id: 3,
    status: 'planned',
    title: 'Automatização de respostas',
    description: 'Fluxos de conversação automatizados com IA',
    date: new Date(Date.now() + 3600000 * 24 * 30) // in 30 days
  }
])

// Useful Links
const usefulLinks = ref<UsefulLink[]>([
  {
    title: 'Documentação',
    url: '#',
    icon: 'book',
    color: 'bg-chatwoot-blue'
  },
  {
    title: 'Suporte',
    url: '#',
    icon: 'headset',
    color: 'bg-chatwoot-green'
  },
  {
    title: 'Changelog',
    url: '#',
    icon: 'list-check',
    color: 'bg-chatwoot-purple'
  },
  {
    title: 'Comunidade',
    url: '#',
    icon: 'comments',
    color: 'bg-chatwoot-yellow'
  }
])

const handleVote = (id: number, vote: 'up' | 'down') => {
  const update = updates.value.find(u => u.id === id)
  if (!update) return
  
  if (vote === 'up') {
    update.votes.up += 1
    if (update.votes.down > 0) update.votes.down -= 1
  } else {
    update.votes.down += 1
    if (update.votes.up > 0) update.votes.up -= 1
  }
}

const dismissAlert = (alertId: number) => {
  const index = alerts.value.findIndex(alert => alert.id === alertId)
  if (index !== -1) {
    alerts.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <Header :dark-mode="darkMode" @toggle-dark-mode="toggleDarkMode" />
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Important Alerts -->
      <AlertList :alerts="alerts" @dismiss-alert="dismissAlert" />
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column -->
        <div class="lg:col-span-2 space-y-8">
          <!-- System Updates -->
          <SystemUpdates :updates="updates" @vote="handleVote" />
        </div>
        
        <!-- Right Column -->
        <div class="space-y-8">
          <!-- Team Message -->
          <TeamMessage />
          
          <!-- Roadmap -->
          <Roadmap :roadmap="roadmap" />
          
          <!-- Quick Poll -->
          <QuickPoll />
          
          <!-- Useful Links -->
          <UsefulLinks :links="usefulLinks" />
        </div>
      </div>
    </main>
  </div>
</template>