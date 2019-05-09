// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

const l1 = {val: 1, next: { val: 2, next: { val: 4, next: null } } }
const l2 = {val: 1, next: { val: 3, next: { val: 4, next: null } } }

var mergeTwoLists = function(l1, l2) {
  let root;
  if (l1.val < l2.val) {
    root = l1;
    l1 = l1.next;
  } else {
    root = l2;
    l2 = l2.next;
  }
  let curr = root;
  while(l1 || l2) {
    let flag = null;
    if (l1 && l2) {
      flag = l1.val < l2.val;
    } else if (l1) {
      flag = true
    } else if (l2) {
      flag = false
    } else {
      break;
    }

    if (flag) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    console.log(curr);
    curr = curr.next;
  }
  return root;
}

const res = mergeTwoLists(l1, l2);
console.log(JSON.stringify(res));