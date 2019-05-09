// 回文链表
// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// 判断回文：通过反转字符串，如果反转后值一致则为回文
var isPalindrome = function (head) {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  const re = array.slice(0).reverse().join('');
  const str = array.join('');
  return re === str;
};