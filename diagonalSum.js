var arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]

function diagonalDifference(arr) {
  const length = arr.length
  let diagonal1 = 0,
    diagonal2 = 0

  // Looping through the array and summing the diagonals.
  for (let i = 0; i < length; i++) {
    // Calculating the primary diagonal.
    diagonal1 += arr[i][i]
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += arr[length - 1 - i][i]
  }
  // return absolute difference value.
  return Math.abs(diagonal1 - diagonal2)
}

// const total = soma - soma2

// if(total < 0){
//     return total * -1
// }
// return total
