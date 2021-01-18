function primus(arr) {
  var arr = [-4, 3, -9, 0, 4, 1]
  var n = arr.length
  var positive = 0
  var negative = 0
  var zero = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1
    } else if (arr[i] < 0) {
      negative += 1
    } else {
      zero += 1
    }
  }
  console.log((positive = positive / n))
  console.log((negative = negative / n))
  console.log((zero = zero / n))
}

primus()
