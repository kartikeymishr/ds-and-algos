// 10 ---> 5 ---> 16

/*let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)

        this.tail = this.head
        this.length = 1;
    }

    append(value) {
        const node = new Node(value)

        this.tail.next = node
        this.tail = node
        this.length++

        return this
    }

    prepend(value) {
        const node = new Node(value)

        node.next = this.head
        this.head = node
        this.length++

        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        const node = new Node(value)

        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next
        leader.next = node
        node.next = holdingPointer
        this.length++

        return this
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--

        return this
    }

    print() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }

        return array
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode;
    }

    reverse() {
        if (!this.head.next) {
            return this
        }

        let first = this.head
        this.tail = this.head
        let second = first.next

        while (second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }

        this.head.next = null
        this.head = first

        return this
    }
}

const linkedList = new LinkedList(10)

linkedList.append(5)
linkedList.append(16)

linkedList.prepend(1)

linkedList.insert(2, 99)
linkedList.insert(4, 66)

// console.log(linkedList.print());

linkedList.remove(3)

console.log(linkedList.print());

linkedList.reverse()

console.log("\n", linkedList.print());