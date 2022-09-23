// Memoization

function addTo80(n) {
    return 80 + n
}

function memoizedAddTo80(n) {
    let cache = {}
    return function (n) {
        if (n in cache) {
            return cache[n]
        } else {
            console.log('long time elapsed');
            cache[n] = n + 80;
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()

// console.log(memoized(1));
// console.log(memoized(5));
// console.log(memoized(54));
// console.log(memoized(4));
// console.log(memoized(5));
// console.log(memoized(54));
// console.log(memoized(5));
// console.log(memoized(4));
// console.log(memoized(5));


function fibonacci(n) {
    console.log(n);
    if (n < 2) {
        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

function memoizedFibonacci() {
    let cache = {}
    return function fib(n) {
        console.log(n);
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n]
            }
        }
    }
}

// Bottom Up Approach. Solving the simplest problems then moving to the more complex ones.
function memoizedFibonacci2(n) {
    let answer = [0, 1]
    for (let i = 0; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1])
    }

    return answer.pop()
}

// console.log(fibonacci(20));

const fasterFibonacci = memoizedFibonacci()
console.log(fasterFibonacci(20));