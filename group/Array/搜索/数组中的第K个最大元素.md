## 数组中的第 K 个最大元素

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```
示例 2:
```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
From：[数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
## 方法 1：快排思路 + 挑选查找

### 分析
使用快排的概念结合搜索，只用搜索大于基准值或小于基准值的一侧

### 解答
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

## 方法 2：移动窗口 + 二分法思路插入
### 分析
创建一个数组`arr`，其中拟定数组长度为`k`，数组中插入的数据以正序进行排列。  
循环`nums`中的每位数，若其中`nums[ i ]` > 数组中的最小数`arr[ 0 ]`，即可以将该数插入到`arr`中，在插入的过程中  
利用二分法对数组`arr`进行查找适当的位置，若插入后数组的长度`arr.length` > `k` 的限制，则移除`arr`中的第一位，即当前`arr`的最小位，后续`nums`循环中继续依然判断是否小于`arr[ 0 ]`即可  


### 解答
```javascript
var findKthLargest = function(nums, k) {
  // 以正序对窗口中的值进行排列，长度为k
  const arr = [];
  // 定义个当前的最小值，相当于arr[ 0 ]
  let min = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (arr.length >= k && min > nums[i]) continue;
    min = sortAndFindLast(nums[i]);
  }

  // 利用二分法，查找窗口中大小顺序的空隙进行插入，并返回当前窗口的最小值
  function sortAndFindLast(value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = (left + right) >>> 1;
      const item = arr[mid];
      if (item > value) {
        right = mid - 1;
      } else if (item < value) {
        left = mid + 1;
      } else {
        left = mid;
        break;
      }
    }
    // 插入值
    arr.splice(left, 0, value);
    // 如果超出k长度，则将首部的数移除，即移除最小的数
    if (arr.length > k) {
      arr.shift();
    }
    return arr[0];
  }
  return min;
};
```
