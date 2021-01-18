const arr = [10, 5, 3, 4, 2]

function miniMaxSum(arr) {
  let order = arr.sort(function (a, b) {
    return a - b
  })
  console.log(order)
  let soma1 = 0
  let soma2 = 0
  for (let i = 0; i < arr.length - 1; i++) {
    soma1 += order[i]
  }

  for (let j = 1; j < arr.length; j++) {
    soma2 += order[j]
  }

  console.log(soma1, soma2)
}

miniMaxSum(arr)
