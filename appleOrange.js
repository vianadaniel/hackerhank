var m = [2, 3, -4]
var n = [3, -2, -4]
var a = 4
var b = 12
var s = 7
var t = 10
var mSum = []
var nSum = []
while (m.length) {
  var i = m.length - 1
  if (m[i] + a >= s && m[i] + a <= t) {
    mSum.push(m[i] + a)
  }
  m.length--
}
console.log(mSum.length)
while (n.length) {
  var i = n.length - 1
  if (n[i] + b >= s && n[i] + b <= t) {
    nSum.push(n[i] + b)
  }
  n.length--
}
console.log(nSum.length)
