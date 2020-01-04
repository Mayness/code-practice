### transform Array data into ListNode data

code:

```javascript
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function generateNode(array) {
  const res = new ListNode();
  let curr = res;
  for (let item of array) {
    curr.next = new ListNode(item);
    curr = curr.next;
  }
  return res.next;
}
```

example:

```javascript
const listNode = generaNode([4, 2, 1, 3]);
```

### save previous value in Array

code:

```javascript
function Iterator(k) {
  const array = new Array(k).fill(0);
  while (array[ k ] < 100) {
    for (let i = k - 1; i > 0; i--) {
      /* 
      1，这里以逆序来递进表示。由于是O(k)的空间，如果正序的话，可能会导致上一次的数据被污染
      2，如果运算为: array[i] += array[i + 1] + 1; 则需要为正序循环
      */
      array[i] += array[i - 1] + 1;
    }
  }
  return array;
}
```
