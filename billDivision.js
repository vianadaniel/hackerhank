var bill = [3, 10, 2, 9]
var k = 1

var b = 7

function division(bill, k, b) {
  var sum = 0
  for (var i = 0; i < bill.length; i++) {
    if (i != k) {
      sum = sum + bill[i]
    }
  }
  if (sum / 2 == b) {
    console.log("Bon Appetit")
  } else {
    console.log(b - sum / 2)
  }
}
division(bill, k, b)
