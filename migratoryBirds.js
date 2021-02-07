arr = [5, 5, 1, 1, 2, 2, 3]

function bird(arr) {
  const freqObject = arr.reduce((acc, value) => {
    if (acc[value]) {
      acc[value]++
    } else {
      acc[value] = 1
    }
    console.log(acc)
    return acc
  }, {})
  var arrResult = []
  const highest = Math.max(...Object.values(freqObject))
  // console.log(highest, "maior")
  const types = Object.keys(freqObject)
  // console.log(types, "tipos")
  types.forEach((type) => {
    if (freqObject[type] === highest) {
      arrResult.push(type)
    }
  })
  // for (const [key, value] of Object.entries(countMap)){
  //   if(Number(value) === bigestValue){
  //     result = [...result, key]
  //   }
  // }
  // console.log(arrResult[0])
  return arrResult[0]
}
bird(arr)
