var grades = [73, 67, 38, 33]

function grading(grades) {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] > 37) {
      var secNum = String(grades[i])[1]
      if (secNum > 2 && secNum < 5) {
        grades[i] = Number(String(grades[i])[0] + 5)
      } else if (secNum > 7 && secNum < 10) {
        grades[i] = Number(String(grades[i])[0] + 0) + 10
      }
    }
  }
  console.log(grades)
  return grades
}
grading(grades)
