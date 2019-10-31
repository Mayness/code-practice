## 数组中的第 K 个最大元素（TODO:待优化）

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

## 分析

快排搜索

## 解答

```javascript
var findKthLargest = function(nums, k) {
  var sort = function(nums) {
    if (nums.length <= 1) return nums;
    const root = nums[0];
    const left = [];
    const right = [];
    for (let item of nums.slice(1)) {
      if (item > root) {
        right.push(item);
      } else {
        left.push(item);
      }
    }
    return sort(right)
      .concat([root])
      .concat(sort(left));
  };
  return sort(nums)[k - 1];
};
```
