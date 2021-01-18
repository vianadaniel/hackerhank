var n = 3
var k = 10
var arr = []
function test(n, k) {
  for (var i = 1; i <= n; i++) {
    var multiple = i * k
    arr.push(multiple)
  }
  console.log(arr)
}
test(n, k)
