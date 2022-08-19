const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let j = 0
    for (let i = 0; i < array.length; i++) {


        if (array[i] === sequence[j]) {
            j++
        }

    }
    if (j === sequence.length) return true
    return false
}
console.log(isValidSubsequence(array, sequence))