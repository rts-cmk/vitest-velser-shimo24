import { describe, it, expect } from 'vitest'
import { normalizeValue } from '../utils/handleInput.jsx'

describe('normalisereVærdi', () => {
  it('sayıları işler', () => {
    expect(normalizeValue(2)).toBe(4)
    expect(normalizeValue(NaN)).toBe('NaN')
  })
  it('stringleri işler', () => {
    expect(normalizeValue(' abc ')).toBe('ABC')
  })
  it('null döner', () => {
    expect(normalizeValue(null)).toBeNull()
  })
  it('desteklenmeyen tipe hata fırlatır', () => {
    expect(() => normalizeValue({})).toThrow(TypeError)
  })
})



