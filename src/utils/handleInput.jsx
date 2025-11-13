export function normalizeValue(input) {
if (input === null) return null
if (typeof input === 'number') return Number.isNaN(input) ? 'NaN' : input * 2
if (typeof input === 'string') return input.trim().toUpperCase()
throw new TypeError('Unsupported type')
}