export function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
  
  if (seconds < 0) {
    const futureSeconds = Math.floor((date.getTime() - new Date().getTime()) / 1000)
    const intervals = [
      { label: 'dia', seconds: 86400 },
      { label: 'hora', seconds: 3600 },
      { label: 'minuto', seconds: 60 }
    ]
    
    for (let interval of intervals) {
      const intervalCount = Math.floor(futureSeconds / interval.seconds)
      if (intervalCount >= 1) {
        return `em ${intervalCount} ${interval.label}${intervalCount !== 1 ? 's' : ''}`
      }
    }
    return 'em breve'
  }
  
  const intervals = [
    { label: 'mês', seconds: 2592000 },
    { label: 'semana', seconds: 604800 },
    { label: 'dia', seconds: 86400 },
    { label: 'hora', seconds: 3600 },
    { label: 'minuto', seconds: 60 }
  ]
  
  for (let interval of intervals) {
    const intervalCount = Math.floor(seconds / interval.seconds)
    if (intervalCount >= 1) {
      return `há ${intervalCount} ${interval.label}${intervalCount !== 1 ? 's' : ''}`
    }
  }
  
  return 'há alguns segundos'
}