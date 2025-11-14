import { describe, it, expect, vi } from 'vitest'

vi.mock('../deps/external.jsx', () => ({
  getToken: vi.fn().mockResolvedValue('TEST_TOKEN'),
}))

import { buildAuthHeader } from '../utils/useDependency.jsx'
import { getToken } from '../deps/external.jsx'

describe('buildAuthHeader', () => {
  it('genererer header med mocked token', async () => {
    const header = await buildAuthHeader(123)
    expect(header).toEqual({ Authorization: 'Bearer TEST_TOKEN', 'X-User': '123' })
    expect(getToken).toHaveBeenCalledTimes(1)
  })
  it('userId yoksa hata verir', async () => {
    await expect(buildAuthHeader()).rejects.toThrow('userId required')
  })
})
