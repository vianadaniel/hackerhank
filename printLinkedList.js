const list = {
  data: 16,
  next: { data: 13, next: { data: 13, next: null } },
}
console.log(list.next)
function printLinkedList(head) {
  while (head) {
    console.log(head.data)
    head = head.next
  }
}
printLinkedList(list)
