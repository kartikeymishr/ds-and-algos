const letters = ['a', 'd', 'z', 'e', 'r', 'b']
const basket = [2, 65, 34, 2, 1, 7, 8]

console.log(letters.sort());

let comparator = function (a, b) {
    return a - b
}


console.log(basket.sort(comparator));