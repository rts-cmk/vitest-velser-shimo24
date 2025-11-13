export function fetchNumber(shouldFail = false, delay = 5) {
return new Promise((resolve, reject) => {
setTimeout(() => shouldFail ? reject(new Error('Network error')) : resolve(42), delay)
})
}
