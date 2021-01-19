let time = "12:01:00PM"
let time2 = "12:40:03AM"

function timeConversion(time) {
  let arr = time.slice(0, 8).split(":")
  if (time[8] === "P") {
    if (arr[0] == "12") {
      arr[0] = "12"
    } else {
      arr[0] = Number(arr[0]) + 12
    }
  } else if (time[8] === "A") {
    if (arr[0] == "12") {
      arr[0] = "00"
    }
  }
  return arr
}

timeConversion(time2)
