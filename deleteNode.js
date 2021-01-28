require("util").inspect.defaultOptions.depth = null

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
const list = {
  data: 16,
  next: { data: 13, next: { data: 73, next: { data: 15, next: null } } },
}

function deleteNode(head, position) {
  let counter = 0
  let node = head
  let prevNode = head

  if (position == 0) {
    head = head.next
    console.log(head)
    return head
  } else {
    while (counter < position) {
      prevNode = node
      node = node.next
      counter++
    }
    console.log("prev", prevNode)
    console.log("node", node)

    prevNode.next = node.next
  }

  return head
}
deleteNode(list, 2)
