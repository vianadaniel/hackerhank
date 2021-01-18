var candles = [4, 4, 1, 3]

var result = 0

function birthdayCakeCandles(candles) {
  let order = candles.sort(function (a, b) {
    return b - a
  })
  console.log(order)
  for (let i = 0; i < order.length; i++) {
    if (order[0] === order[i]) {
      result += 1
    }
  }
  return result
  console.log(result)
}

birthdayCakeCandles(candles)
