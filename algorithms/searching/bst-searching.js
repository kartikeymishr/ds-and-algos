class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)

        if (this.root === null) {
            this.root = node
        } else {
            let currentNode = this.root

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node

                        return this
                    }

                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node

                        return this
                    }

                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false
        }

        let currentNode = this.root
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                return currentNode
            }
        }

        return false
    }

    breadthFirstSearch() {
        let currentNode = this.root
        let list = []
        let queue = []

        queue.push(currentNode)
        while (queue.length > 0) {
            currentNode = queue.shift()
            list.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return list
    }

    breadthFirstSearchR(queue, list) {
        if (queue.length === 0) {
            return list
        }

        let currentNode = queue.shift()
        list.push(currentNode.value)

        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }

        return this.breadthFirstSearchR(queue, list)
    }

    dfsInOrder() {
        return this.traverseInOrder(this.root, [])
    }

    dfsPreOrder() {
        return this.traversePreOrder(this.root, [])
    }

    dfsPostOrder() {
        return this.traversePostOrder(this.root, [])
    }

    traverseInOrder(node, list) {
        if (node.left) {
            this.traverseInOrder(node.left, list)
        }

        list.push(node.value)

        if (node.right) {
            this.traverseInOrder(node.right, list)
        }

        return list
    }

    traversePreOrder(node, list) {
        list.push(node.value)

        if (node.left) {
            this.traversePreOrder(node.left, list)
        }

        if (node.right) {
            this.traversePreOrder(node.right, list)
        }

        return list
    }

    traversePostOrder(node, list) {
        if (node.left) {
            this.traversePostOrder(node.left, list)
        }

        if (node.right) {
            this.traversePostOrder(node.right, list)
        }

        list.push(node.value)

        return list
    }
}

//       9
//   4        20
// 1   6  15      170

// InOrder ~ [1,4,6,9,15,20,170]
// PreOrder ~ [9,4,1,6,20,15,170] // Easy to recreate a tree
// PostOrder ~ [1,6,4,15,170,20,9]

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log("Breadth First Search");
console.log(tree.breadthFirstSearch());
console.log("\nBreadth First Search :: Recursive");
console.log(tree.breadthFirstSearchR([tree.root], []));

console.log("\nDFS In Order");
console.log(tree.dfsInOrder());
console.log("\nDFS Pre Order");
console.log(tree.dfsPreOrder());
console.log("\nPost Order");
console.log(tree.dfsPostOrder());