// soma de arrays

var ar = [1, 2, 3]

function simpleArraySum() {
  var soma = 0
  for (var i = 0; i < ar.length; i++) {
    soma += ar[i]
  }
  console.log(soma)
  return soma
}
simpleArraySum(ar)
