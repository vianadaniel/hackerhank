var n = 5
var p = 1

function page(n, p) {
  var flip = 0
  var flip1 = 0
  var p1 = 0
  for (p; p < n; p++) {
    flip = flip + 0.5
  }
  flip = flip / 2
  // console.log(flip)
  for (p1; p1 < n; p1++) {
    flip1 = flip1 + 0.5
  }
  // console.log(flip1)
  console.log(Math.min(Math.floor(flip), Math.floor(flip1)))
}
page(n, p)
