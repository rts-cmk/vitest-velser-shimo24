import { getToken } from '../deps/external.jsx'
export async function buildAuthHeader(userId) {
if (!userId) throw new Error('userId required')
const token = await getToken()
return { Authorization: `Bearer ${token}`, 'X-User': String(userId) }
}