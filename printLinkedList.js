const list = {
  data: 16,
  next: { data: 13, next: { data: 73, next: null } },
}

function printLinkedList(head) {
  while (head) {
    console.log(head.data)
    head = head.next
  }
}
printLinkedList(list)
