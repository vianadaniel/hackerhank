var ar = [1, 3, 2, 6, 1, 2]
var k = 3

function div(ar, k) {
  var sum = 0
  for (var i = 0; i < ar.length; i++) {
    for (var j = 0; j < ar.length; j++) {
      if (i < j) {
        if ((ar[i] + ar[j]) % k == 0) {
          console.log(ar[i], ar[j])
          sum += 1
        }
      }
    }
  }
  return sum
}
div(ar, k)
