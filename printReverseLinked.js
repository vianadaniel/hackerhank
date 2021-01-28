const list = {
  data: 16,
  next: { data: 13, next: { data: 73, next: null } },
}

function reversePrint(head) {
  if (head.next !== null) {
    reversePrint(head.next)
  }
  console.log(head.data)
}

reversePrint(list)
