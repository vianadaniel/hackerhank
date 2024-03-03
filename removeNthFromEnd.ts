/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let len: number = 0;
  let prv: ListNode | null = null;
  let cur: ListNode | null = head;
  while (cur) {
    cur = cur.next;
    len++;
  }
  len -= n;
  cur = head;
  while (len) {
    prv = cur;
    cur = cur.next;
    len--;
  }
  if (cur === head) head = head.next || null;
  else prv.next = cur.next;
  return head;
};