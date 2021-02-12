var n = 5
var p = 3

function page(n, p) {
  var flip = 0
  for (p; p < n; p++) {
    flip += Math.floor(0.5 / 2)
  }
  return flip
  console.log(flip)
}

page(n, p)
