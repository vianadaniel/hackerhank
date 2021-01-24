class SinglyLinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
const list = {
  data: 16,
  next: { data: 13, next: { data: 73, next: null } },
}

function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data)
  if (!head) {
    head = newNode
    return head
  }
  let current = head
  while (current.next) {
    current = current.next
  }
  current.next = newNode

  while (head) {
    console.log(head.data)
    head = head.next
  }
  return head
}
insertNodeAtTail(list, 34)
