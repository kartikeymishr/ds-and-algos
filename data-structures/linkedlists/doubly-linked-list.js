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
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value)

        this.tail = this.head
        this.length = 1;
    }

    append(value) {
        const node = new Node(value)

        node.previous = this.tail
        this.tail.next = node
        this.tail = node
        this.length++

        return this
    }

    prepend(value) {
        const node = new Node(value)

        node.next = this.head
        this.head.previous = node
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
        const follower = leader.next
        leader.next = node
        node.previous = leader
        node.next = follower
        follower.previous = node
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

    printPretty() {
        let currentNode = this.head
        while (currentNode !== null) {
            console.log("Value :: ", currentNode.value);
            currentNode = currentNode.next
        }
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
}

const linkedList = new DoublyLinkedList(10)

console.log(linkedList);

linkedList.append(5)
linkedList.append(16)

linkedList.prepend(1)

console.log(linkedList);

linkedList.insert(2, 99)

linkedList.printPretty()

console.log(linkedList.insert(4, 66));

linkedList.printPretty()

// console.log(linkedList.insert(2, 99));
// console.log(linkedList.insert(4, 66));
//
// console.log(linkedList.print());
//
// console.log(linkedList.remove(3));
//
// console.log(linkedList.print());