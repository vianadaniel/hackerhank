let date = new Date().toISOString()

function formatDate(date) {
  let formatDate = date.slice(0, 16)
  return formatDate
}
let dateNow = new Date().toISOString()
console.log(formatDate(date))
console.log(dateNow)
