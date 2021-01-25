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
function insertNodeAtPosition(head, data, position) {
  let counter = 1
  let newnode = new SinglyLinkedListNode(data)
  let node = head

  if (position == 0) {
    node = new SinglyLinkedListNode(data)
    node.next = head
  }

  while (counter != position) {
    node = node.next
    counter += 1
  }

  newnode.next = node.next
  node.next = newnode

  console.log(head)

  return head
}

insertNodeAtPosition(list, 37, 2)
