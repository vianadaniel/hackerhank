require("util").inspect.defaultOptions.depth = null
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

  console.log(head)
  return head
}
insertNodeAtTail(list, 34)
