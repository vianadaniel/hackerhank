function dayOfProgrammer(year) {
  if (year == 1918) {
    // Corner case
    return `26.09.${year}`
  } else if (year > 1918) {
    // Calculating Leap year in Gregorian Calendar
    const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
    return `${isLeapYear ? 12 : 13}.09.${year}`
  } else {
    // Calculating Leap year in Julian Calendar
    return `${year % 4 == 0 ? 12 : 13}.09.${year}`
  }
}

console.log(dayOfProgrammer(1700)) // leap year > 13..
