const path = "UDDDUDUU"

const steps = path.length

function counting(path, steps) {
  let s = path.split("")
  let sum = 0
  let count = 0
  for (let i = 0; i < steps; i++) {
    if (s[i] == "U") {
      sum += 1

      if (sum == 0) {
        count++
        console.log(count)
      }
    } else sum--
  }
  return count
}
counting(path, steps)
