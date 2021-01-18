var candles = [5, 5, 3, 2, 1, 5]

function birthCakCandles(candles) {
  var result = 0
  var order = candles.sort((a, b) => b - a)

  for (var i = 0; i < order.length; i++) {
    if (order[0] === order[i]) {
      result += 1
    }
  }
  return result
  console.log(result)
}

birthCakCandles(candles)
