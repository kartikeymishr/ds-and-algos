class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }

        return hash
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) this.data[address] = []
        this.data[address].push([key, value])
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }

        return undefined
    }

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            let bucket = this.data[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    keysArray.push(bucket[j][0])
                }
            }
        }

        return keysArray
    }
}

const hashTable = new HashTable(50)
hashTable.set('grapes', 4)
hashTable.set('apples', 9)
hashTable.set('bananas', 10)
hashTable.set('oranges', 2)
hashTable.set('mangoes', 7)

// console.log(hashTable)
console.log(hashTable.keys());