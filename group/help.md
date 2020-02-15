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

### transform Array data into TreeNode data

code:
```javascript
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function generateTreeNode(array) {
  const arr = [];
  let index = 0;
  while(array.length) {
    arr.push(array.splice(0, Math.pow(2, index)));
    index++;
  }
  function travel(index, i) {
    if (!arr[ index ] || arr[ index ][ i ] === undefined) return null;
    const tree = new TreeNode(arr[ index ][ i ]);
    tree.left = travel(index + 1, 2 * i);
    tree.right = travel(index + 1, 2 * i + 1);
    return tree;
  }
  return travel(0, 0)
}
```

example:

```javascript
const listNode = generateTreeNode([3,5,1,6,2,0,8,null,null,7,4]);
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

### hyphenate a camelCase string.
```javascript
var hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached((str) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})
```

### get repeat string
```javascript
function getReapeat(string) {
  // 匹配重复出现的字符 （.）是任意字符,如果只匹配重复的数字则可以换成\d  (?=.*\1) 是断言 表示任意字符与第一个捕获的内容至少出现了两次
  return string.match(/(.)(?=.*\1)/g);
}
```