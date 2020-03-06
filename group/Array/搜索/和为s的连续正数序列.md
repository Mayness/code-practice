## 和为 s 的连续正数序列

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

示例 1：

```
输入：target = 9
输出：[[2,3,4],[4,5]]
```

示例 2：

```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

限制：

```
1 <= target <= 10^5
```

From: [和为 s 的连续正数序列](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof)

## 分析

通过双指针来模拟窗口滑动，分为快指针`fast`和慢指针`slow`，其规则有：

- 当`fast`和`slow`区域的值小于`target`时，这个时候需要增大区域，那么`fast`指针需要加一
- 当`fast`和`slow`区域的值大于`target`时，这个需要缩小区域，那么`slow`指针需要加一
- 当其区域的值等于`target`时候，则需要推入到结果数组中，并且整体区域向前滑动，即`fast`加一，`slow`加一

其循环条件已经得出了，现在需要考虑其结束循环的条件，其中需要满足的状况有:

- 由于要求结果至少含有两个连续的数，因此`slow`本身的值是小于`fast`的
- 在连续的和中，`fast`是不可能大于`Math.ceil(target/2)`的，例如：

```
sum = 15
那么快指针target最多等于8，不可能指到9，因为若为9的话，其连续序列最少为[8,9]，必定会超出sum，因此这里对fast的限定条件是 <= Math.ceil(target/2)
```

## 解答

```javascript
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  const mid = Math.ceil(target / 2);
  let res = [];
  let slow = 1;
  let fast = 2;
  let arr = [1, 2];
  let sum = 3;
  while (fast <= mid && slow < fast) {
    if (sum < target) {
      fast++;
      sum += fast;
      arr.push(fast);
    } else if (sum > target) {
      arr.shift();
      sum -= slow;
      slow++;
    } else {
      res.push(arr.slice(0));
      fast++;
      sum += fast;
      sum -= slow;
      slow++;
      arr.shift();
      arr.push(fast);
    }
  }
  return res;
};
```
