export class Counter {
constructor(start = 0) { this.value = start }
inc() { this.value += 1; return this.value }
reset() { this.value = 0 }
}
