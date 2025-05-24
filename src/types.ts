export interface Alert {
  id: number
  type: 'info' | 'warning' | 'error'
  title: string
  message: string
  date: Date
}

export interface UpdateVotes {
  up: number
  down: number
}

export interface Update {
  id: number
  type: 'new' | 'fix' | 'improve'
  title: string
  description: string
  date: Date
  votes: UpdateVotes
}

export type RoadmapStatus = 'released' | 'development' | 'planned'

export interface RoadmapItem {
  id: number
  status: RoadmapStatus
  title: string
  description: string
  date: Date
}

export interface UsefulLink {
  title: string
  url: string
  icon: string
  color: string
}

export type AlertType = 'info' | 'warning' | 'error'
export type UpdateType = 'new' | 'fix' | 'improve'
export type UpdateFilter = 'all' | 'new' | 'fix' | 'improve'
export type PollVote = 'yes' | 'no' | null