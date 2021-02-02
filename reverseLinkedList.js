const list = {
  data: 16,
  next: { data: 13, next: { data: 73, next: null } },
}

function reverseLinkedList(head) {
  //Trying to reverse empty or single node list, list remains as-is
  if (!head || !head.next) {
    return head
  }

  var curNode = head
  var prevNode = null
  var nextNode = curNode.next

  //Start at current node = head and previous node = null (new list end indicator):
  //1. Save reference to next node in list
  //2. Point current node to previous node
  //3. Set previous node to current node to maintain link to new list's left side
  //4. Set current node to next node in list to re-attach to old list's left side
  //
  //Repeat until current node is null (passed the end of the list)
  //New list head is the last recorded previous node
  //
  //Example:
  //
  //          1 -> 2 -> 3 -> null
  //( null <- 1 ) -> 2 -> 3 -> null
  //  null <- ( 1 <- 2 ) <- 3 -> null
  //  null <- 1  <-  ( 2 <- 3 )
  while (curNode) {
    nextNode = curNode.next
    curNode.next = prevNode
    prevNode = curNode
    curNode = nextNode
  }
  console.log(prevNode)
  return prevNode
}

reverseLinkedList(list)
