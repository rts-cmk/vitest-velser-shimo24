import { describe, it, expect } from 'vitest'
import { fetchNumber } from '../utils/asyncOp.jsx'

describe('fetchNumber', () => {
  it('başarıyla döner', async () => {
    await expect(fetchNumber(false)).resolves.toBe(42)
  })
  it('hata ile reddeder', async () => {
    await expect(fetchNumber(true)).rejects.toThrow('Network error')
  })
})
