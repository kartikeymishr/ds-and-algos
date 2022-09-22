// Useful when you are sure the list is mostly sorted

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // Move number to first position
            array.unshift(array.splice(i, 1)[0])
        } else {
            // Find where number should go
            for (let j = 0; j < i; j++) {
                if (array[i] > array[i - j] && array[i] < array[j]) {
                    // Move number to right spot
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }
    }

    return array
}

console.log(insertionSort(numbers));

// O (N^2) - Time Complexity