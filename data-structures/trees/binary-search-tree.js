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

    remove(value) {
        if (!this.root) {
            return false
        }

        let currentNode = this.root
        let parentNode = null
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                if (currentNode.right === null) {
                    // No right child

                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        if (currentNode.value < parentNode.value) {
                            // If Parent < Current Node
                            // Make Left Child a Left Child of Parent

                            parentNode.left = currentNode.left
                        } else if (currentNode.value > parentNode.value) {
                            // If Parent > Current Node
                            // Make Left Child a Right Child of Parent

                            parentNode.right = currentNode.left
                        }
                    }
                } else if (currentNode.right.left === null) {
                    // Right Child which doesn't have Left Child

                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        currentNode.right.left = currentNode.left
                        if (currentNode.value < parentNode.value) {
                            // If Parent < Current Node
                            // Make Right Child a Left Child of Parent

                            parentNode.left = currentNode.right
                        } else if (currentNode.value > parentNode.value) {
                            // If Parent > Current Node
                            // Make Right Child a Right Child of Parent

                            parentNode.right = currentNode.right
                        }
                    }
                } else {
                    // Find Right Child's Left Most parent
                    let leftMost = currentNode.right.left
                    let leftMostParent = currentNode.right
                    while (leftMost.left !== null) {
                        leftMostParent = leftMost
                        leftMost = leftMost.left
                    }

                    // Parent's left subtree is now leftMost's right subtree
                    leftMostParent.left = leftMost.right
                    leftMost.left = currentNode.left
                    leftMost.right = currentNode.right

                    if (parentNode === null) {
                        this.root = leftMost
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftMost
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftMost
                        }
                    }
                }

                return true
            }
        }
    }
}

function traverse(node) {
    const tree = {value: node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)

    return tree
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(9));

console.log(tree.remove(6));

console.log(JSON.stringify(traverse(tree.root)));