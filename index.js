function fibonacciSequence(n){ // create a function where we take a number as a parameter.
const fibArray = [0,1] // The first two numbers of the fibonacciSequence will be at the beginning of this array.; T = O(1)
for(let i = 2; i < n; i++){ // We will then create a loop so we can assign each empty element in the array the next fibonacci number.
fibArray[i] = fibArray[i - 1] + fibArray[i - 2] // This code will assign the empty element the sum of the last 2 elements in the array. ;T = n * O(1).
    }
    return fibArray// return the whole array up the number provided in the parameter. T = O(1)
}
// Time complexity : T = O(1) + n * O(1) + O(1) -> (Find the fastest growing term, then drop all linear expressions.) c1 + n*c2 = O(n)