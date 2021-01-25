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

  while (head) {
    console.log(head.data)
    head = head.next
  }

  return head
}
