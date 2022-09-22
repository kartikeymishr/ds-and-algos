// reverse a string
// 'Hi I am Kartikey'

function reverseString(string) {
    if (!string || string.length < 2 || typeof string != 'string') {
        return string
    }

    const backwardsArray = []
    const totalItems = string.length - 1

    for (let i = totalItems; i >= 0; i--) {
        backwardsArray.push(string[i])
    }

    return backwardsArray.join('')
}

function reverseSimple(string) {
    return string.split('').reverse().join('')
}

let string = 'Hi I am Kartikey'

// console.log(reverseString(string));
// console.log(reverseSimple(string));

// ===   ===   ===   ===   ===   ===   ===   ===   ===   ===   === //

// merge sorted arrays

function mergeSortedArrays(array1, array2) {
    const mergedArray = []

    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1

    if (array1.length === 0) {
        return array2
    }

    if (array2.length === 0) {
        return array1
    }

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }

    return mergedArray
}

const array1 = [0, 3, 4, 31]
const array2 = [4, 6, 30]

console.log(mergeSortedArrays(array1, array2));