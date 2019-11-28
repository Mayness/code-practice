## 合并 K 个排序链表

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

## 方法 1：逐个比较

### 分析

比较 每个链表中的首节点，获得最小值的节点。  
将选中的节点接在最终有序链表的后面。

### 解答

```javascript
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const res = new ListNode();
  let curr = res;
  while (lists.length) {
    let minNode = new ListNode(Number.MAX_SAFE_INTEGER);
    let index = -1;
    for (let i = 0; i < lists.length; ) {
      if (!lists[i]) {
        lists.splice(i, 1);
        continue;
      }
      if (minNode.val > lists[i].val) {
        minNode = lists[i];
        index = i;
      }
      i++;
    }
    if (index === -1) break;
    curr.next = minNode;
    if (minNode.next) {
      lists[index] = lists[index].next;
    } else {
      lists.splice(index, 1);
    }
    curr = curr.next;
    curr.next = null;
  }
  return res.next;
};
```

## 方法 2：分治

### 分析

将数组相邻链表进行两两合并，例如最初有 k 个链表，合并为 k/2 个链表，再合并为 k/4 etc. 直到最后合成 1 个完整的链表
<img src="../../static/23-answer.png"/>

### 解答

```javascript
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const len = lists.length;
  if (len <= 1) return lists[0] || null;
  if (len === 2) return mergeTwoLists(lists[0], lists[1]);
  const mid = len >> 1;
  return mergeTwoLists(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)));
};

var mergeTwoLists = function(nodeA, nodeB) {
  const res = new ListNode();
  let curr = res;
  if (!nodeA || !nodeB) {
    return nodeA || nodeB;
  } else if (nodeA && !nodeB) {
    return nodeA;
  } else if (!nodeA && nodeB) {
    return nodeB;
  }
  while (nodeA || nodeB) {
    if (nodeA && !nodeB) {
      curr.next = nodeA;
      break;
    } else if (!nodeA && nodeB) {
      curr.next = nodeB;
      break;
    }
    if (nodeA.val < nodeB.val) {
      curr.next = nodeA;
      nodeA = nodeA.next;
    } else {
      curr.next = nodeB;
      nodeB = nodeB.next;
    }
    curr = curr.next;
  }
  return res.next;
};
```
