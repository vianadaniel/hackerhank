var n = 7
var arr = [1, 2, 1, 2, 1, 3, 2]
function sale(arr) {
  var result = 0
  const countMap = {}
  for (const element of arr) {
    if (countMap[element]) {
      countMap[element] += 1
    } else {
      countMap[element] = 1
    }
  }

  for (const [key, value] of Object.entries(countMap)) {
    if (Number(value) % 2 == 0) {
      result += Number(value) / 2
    } else {
      result += (Number(value) - 1) / 2
    }
  }
  console.log(countMap)
  console.log(result)
}

sale(arr)
