var a = [2, 6]
var b = [24, 36]

function getTotalX(a, b) {
  let validX = []
  let x = 0
  const minA = Math.min(...a)
  const maxB = Math.max(...b)
  const isFactorOf = (arrItem, x) => x % arrItem === 0
  const isFactorFor = (arrItem, x) => arrItem % x === 0

  for (x = minA; x <= maxB; x++) {
    if (a.every((av) => isFactorOf(av, x))) {
      if (b.every((bv) => isFactorFor(bv, x))) {
        validX.push(x)
      }
    }
  }

  return validX.length
}
