const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        // Setting current index as minimum
        let min = i;
        let temp = array[i]

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }

        array[i] = array[min]
        array[min] = temp
    }

    return array
}

console.log(selectionSort(numbers));

// O (N^2) - Time Complexity