var d = 2
var arr = [1, 2, 3, 4, 5]

// function rotLeft(arr, d) {
//   while (d) {
//     arr.push(arr.shift())
//     d--
//     console.log(arr)
//   }
//   return arr
// }

function rotLeft(a, d) {
  let len = 0,
    j = 0
  var b = []
  len = a.length
  for (let i = d; i < len; i++) {
    b[j] = a[i]
    j++
  }
  console.log(b)
  for (let i = 0; i < d; i++) {
    b[j] = a[i]
    j++
  }
  console.log(b)
  return b
}
rotLeft(arr, d)

// function rotateLeft(d, arr) {

//   let newArray = []

//   for(let i = d; i < arr.length; i++){
//       newArray.push(arr[i])
//   }

//   for(let i = 0; i < d; i++){
//       newArray.push(arr[i])
//   }

//   return newArray
// }
