export function parsePositiveInt(input) {
const n = Number(input)
if (!Number.isInteger(n) || n <= 0) throw new RangeError('Input must be a positive integer')
return n
}