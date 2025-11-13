import { describe, it, expect } from 'vitest'
import { classifyScore } from '../utils/branching.jsx'

describe('classifyScore', () => {
  it('fangster mangler og er ugyldige', () => {
    expect(classifyScore(null)).toBe('missing')
    expect(classifyScore(undefined)).toBe('missing')
    expect(classifyScore(NaN)).toBe('invalid')
    expect(classifyScore('abc')).toBe('invalid')
  })
  it('alle nummergrene', () => {
    expect(classifyScore(-1)).toBe('low')
    expect(classifyScore(0)).toBe('zero')
    expect(classifyScore(10)).toBe('mid')
    expect(classifyScore(55)).toBe('high')
    expect(classifyScore(95)).toBe('elite')
  })
})
