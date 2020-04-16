## 和为K的子数组
给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1 :
```
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
```
说明 :
```
数组的长度为 [1, 20,000]。
数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
```
From: [和为K的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k)

## 分析
由于是对连续数组求和，假设`i`为某个满足条件的起始坐标, `j`为`i`对应的结束坐标，那么满足条件的公式为`F(i, j) = k`，由于`i`和`j`是中间的数都是连续的，因此这里可以理解为
```
F(i, j) = F(0, j) - F(0, i) = k;
```
即从起始坐标到`j`的和 减去 起始坐标到`i`的和 即为满足`k`的条件。那么现在需要找的是满足条件的`F(0, i)`，也就是寻找`F(0, j) - k`。  
可以借助哈希表`map`，将之前每个出现的`0`到`j`之间的每个`i`的和进行记录。在遍历的过程中，即是寻找`map[ F(0, j) - k ]`

## 解答
```javascript
var subarraySum = function(nums, k) {
  let res = 0;
  // 这里注意添加[0, 1]，因为当 sum === k 的时候，也是满足条件的
  let map = new Map([[0, 1]]);
  let sum = 0;
  for (let item of nums) {
    sum += item;
    const value = map.get(sum - k);
    // 加上满足条件的个数
    if (value) res += value;
    map.set(sum, ~~map.get(sum) + 1);
  }
  return res;
};
```