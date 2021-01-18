var str = ["ab", "ab", "abc", "z"]
var query = ["ab", "abc", "bc"]

function sparseArrays(str, query) {
  let memory = {}
  for (let st of str) {
    memory[st] = (memory[st] || 0) + 1
  }
  let arr = query.map((x) => memory[x] || 0)

  console.log(arr)
}
function matchingStrings(str, query) {
  return query.map((x) => str.filter((y) => y === x).length)
}
sparseArrays(str, query)
// console.log(matchingStrings(srt, query))
