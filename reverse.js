function reverseArray(a) {
  var ret = new Array()
  for (var i = a.length - 1; i >= 0; i--) {
    ret.push(a[i])
  }
  return ret
}
