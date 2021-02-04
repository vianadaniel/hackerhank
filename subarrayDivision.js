var s = [1, 2, 1, 3, 2]
var m = 2
var d = 3

function sub(s, d, m) {
  let result = 0
  console.log(s.slice(0, 2))
  console.log(s.reduce((x, y) => x + y))
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
      result++
    }
  }
  console.log(result)
  return result
}
sub(s, d, m)
