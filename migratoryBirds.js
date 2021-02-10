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
  console.log(freqObject)
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

  return arrResult[0]
  // const countMap = {};
  // let result = []

  // for (const element of arr) {
  //   if (countMap[element]) {
  //     countMap[element] += 1;
  //   } else {
  //     countMap[element] = 1;
  //   }
  // }

  // let bigestValue = Math.max(...Object.values(countMap))

  // for (const [key, value] of Object.entries(countMap)){
  //   if(Number(value) === bigestValue){
  //     result = [...result, key]
  //   }
  // }
}
bird(arr)
