import { describe, it, expect } from 'vitest'
import { parsePositiveInt } from '../utils/throwOnInvalid.jsx'

describe('parsePositiveInt', () => {
  it('geçerli değerleri döndürür', () => {
    expect(parsePositiveInt(1)).toBe(1)
    expect(parsePositiveInt('3')).toBe(3)
  })
  it('geçersizlerde RangeError fırlatır', () => {
    expect(() => parsePositiveInt(0)).toThrow(RangeError)
    expect(() => parsePositiveInt(-1)).toThrow()
    expect(() => parsePositiveInt(1.2)).toThrow()
    expect(() => parsePositiveInt('abc')).toThrow()
  })
})
import { describe, it, expect } from 'vitest'
import { parsePositiveInt } from '../utils/throwOnInvalid.jsx'

describe('parsePositiveInt', () => {
  it('geçerli değerleri döndürür', () => {
    expect(parsePositiveInt(1)).toBe(1)
    expect(parsePositiveInt('3')).toBe(3)
  })
  it('geçersizlerde RangeError fırlatır', () => {
    expect(() => parsePositiveInt(0)).toThrow(RangeError)
    expect(() => parsePositiveInt(-1)).toThrow()
    expect(() => parsePositiveInt(1.2)).toThrow()
    expect(() => parsePositiveInt('abc')).toThrow()
  })
})
