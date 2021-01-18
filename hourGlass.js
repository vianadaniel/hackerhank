var a = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

var b = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
]

function hourglassSum(arr) {
  var sum = -100
  for (var i = 1; i < arr.length - 1; i++) {
    for (var j = 1; j < arr.length - 1; j++) {
      var sumTemp =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1]
      console.log(sumTemp)
      if (sumTemp > sum) {
        sum = sumTemp
      }
    }
  }
  return console.log(sum)
}

hourglassSum(b)
