## 删除链表的倒数第 N 个节点

给定一个链表，删除链表的倒数第  n  个节点，并且返回链表的头结点。

示例：

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

说明：

给定的 n  保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？  
From：[删除链表的倒数第 N 个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/submissions/)
## 解法 1：存储节点

### 分析

将节点存储在一个数组中，拿到倒数第 n+1 和 n-1 节点后再进行拼接

### 解答

```javascript
var removeNthFromEnd = function(head, n) {
  const cache = [];
  let val = head;
  do {
    cache.push(val);
  } while ((val = val.next));
  if (cache.length === 1 && n === 1) return null;

  if (cache.length - n - 1 < 0) {
    head = cache[cache.length - n + 1];
  } else if (n === 1) {
    cache[cache.length - n - 1].next = null;
  } else {
    cache[cache.length - n - 1].next = cache[cache.length - n + 1];
  }

  return head;
};
```

### 复杂度

时间复杂度：O(n)  
空间复杂度：O(n),每一个元素存储的节点长度是((1 + n) \* n)/2

## 方法 2：双指针

### 分析

使用两个指针，首先指针 1 先走 n+1 位，然后指针 1 和指针 2 同时走，当指针 1 到达尾部的时候，指针 2 的位置正好在倒数 n+1 的位置。即可跳过倒数第 n 个节点  
second.next = second.next.next;  
<img src="../../static/删除链表的倒数第N个节点.gif"/>

### 解答

```javascript
var removeNthFromEnd = function(head, n) {
  const beforeNode = new ListNode();
  beforeNode.next = head;
  let slow = beforeNode;
  let fast = beforeNode;
  let fastStep = 0;
  while (fast.next) {
    // 当步数大于等于n的时候，slow开始走
    if (fastStep >= n) {
      slow = slow.next;
    }
    fast = fast.next;
    fastStep++;
  }
  slow.next = slow.next ? slow.next.next : null;
};
```

### 复杂度

时间复杂度：O(n)  
空间复杂度：O(1)
