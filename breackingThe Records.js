var scores = [0, 9, 3, 10, 2, 20]

function records(s) {
  var result = [0, 0]
  var countMin = s[0]
  var countMax = s[0]
  for (var i = 1; i < s.length; i++) {
    if (s[i] > countMax) {
      countMax = s[i]
      result[0] += 1
    } else if (s[i] < countMin) {
      countMin = s[i]
      result[1] += 1
    }
  }

  console.log(result)
  return result
}
records(scores)
