class Stack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    push(value) {
        this.array.push(value)

        return this
    }

    pop() {
        this.array.pop()

        return this
    }

}

const stack = new Stack()

console.log(stack.push("google"));
console.log(stack.push("udemy"));
console.log(stack.push("youtube"));

console.log(stack.peek());

console.log(stack.pop());


