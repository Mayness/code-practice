### transform Array Data into ListNode Data 
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
