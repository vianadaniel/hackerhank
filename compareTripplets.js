const a = [1, 2, 3]
const b = [3, 2, 1]

let array = []
let soma = 0
let soma2 = 0

const compareTriple = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      soma += 1
      array[0] = soma
    } else if (a[i] < b[i]) {
      soma2 += 1
      array[1] = soma2
    }
  }
  return array
}
