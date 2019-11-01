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
使用快排的概念结合搜索，只用搜索大于基准值或小于基准值的一侧  

## 解答

```javascript
var findKthLargest = function(nums, k) {
  let repeat = 0; // 保存重复的基准值的数量
  const root = nums[0];
  const left = [];
  const right = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > root) {
      right.push(nums[i]);
    } else if (nums[i] < root) {
      left.push(nums[i]);
    } else {
      repeat++;
    }
  }
  // 如果right大于基准的数组的长度 小于 k - 1，【因为需要抛出root,所以是k-1】)
  if (right.length > k - 1) return findKthLargest(right, k);
  // 如果right.length+重复的基准值的数量 >= k - 1，那么查找的值在基准值中
  if (right.length + repeat >= k - 1) return root;
  // 如果right.length+重复的基准值的数量 < k - 1，那么查找的值在基准值的左侧，即小于基准值的数组，另外需要重新计算k值，排除掉 右侧的数量 + 基准数1 + 重复的基准值
  if (right.length + repeat < k - 1) return findKthLargest(left, k - right.length - 1 - repeat);
};
```
