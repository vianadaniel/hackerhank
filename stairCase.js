var n = 6
function staircase(n) {
  var s = " "
  var j = n
  for (var i = 1; i <= n; i++) {
    s += "#"
    console.log("#".repeat(i).padStart(n))
  }
}

staircase(6)
