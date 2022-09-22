class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const node = new Node(value)

        if (this.length === 0) {
            this.first = node
            this.last = node
        }

        this.last.next = node
        this.last = node
        this.length++

        return this
    }

    dequeue() {
        if (!this.first) {
            return null
        }

        if (this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.length--

        return this
    }
}

const queue = new Queue()

console.log(queue.peek());

console.log(queue.enqueue("Joy"));
console.log(queue.enqueue("Matt"));
console.log(queue.enqueue("Pavel"));
console.log(queue.enqueue("Sameer"));

console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());