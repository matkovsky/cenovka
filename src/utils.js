export const normalizePrice = number =>
  parseFloat((number || 0).toString().replace(/,/g, '.').replace(' ', ''))

export const formatPrice = number =>
  new Intl.NumberFormat('sk-SK', { minimumFractionDigits: 2 }).format((number || 0))
