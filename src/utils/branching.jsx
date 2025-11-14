export function classifyScore(score) {
  if (score == null) return 'missing'
  const n = Number(score)
  if (Number.isNaN(n)) return 'invalid'
  if (n < 0) return 'low'
  if (n === 0) return 'zero'
  if (n < 50) return 'mid'
  if (n < 80) return 'high'
  return 'elite'
}
