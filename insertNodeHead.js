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

function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data)
  if (!head) {
    head = newNode
    return head
  } else {
    console.log(head)
    newNode.next = head
    head = newNode
    console.log(head)
  }

  return head
}
insertNodeAtHead(list, 34)
