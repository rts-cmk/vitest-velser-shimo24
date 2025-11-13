import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { Counter } from '../utils/lifecycles.jsx'

let counter

describe('Counter', () => {
  beforeEach(() => { counter = new Counter() })
  afterEach(() => { counter = null })

  it('0 ile başlar', () => {
    expect(counter.value).toBe(0)
  })

  it('arttırılabilir', () => {
    counter.inc()
    expect(counter.value).toBe(1)
  })

  it('sıfırlanabilir', () => {
    counter.inc()
    counter.reset()
    expect(counter.value).toBe(0)
  })
})
