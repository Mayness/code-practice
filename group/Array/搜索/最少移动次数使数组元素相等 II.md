## 最少移动次数使数组元素相等 II
给定一个非空整数数组，找到使所有数组元素相等所需的最小移动数，其中每次移动可将选定的一个元素加1或减1。 您可以假设数组的长度最多为10000。

例如:

输入:
[1,2,3]

输出:
2

说明：
只有两个动作是必要的（记得每一步仅可使其中一个元素加1或减1）： 

[1,2,3]  =>  [2,2,3]  =>  [2,2,2]

From: [最少移动次数使数组元素相等 II](https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii)

## 分析
数组中差值最小的数即其中位数，若数组的长度为奇数，那么中位数即中间两个数，若为偶数，则中位数为中间两位Math.round((p + q) / 2)的值。后续再依次比较中位数即可。

## 解答
```javascript
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let mid;
  if (nums.length % 2) {
    mid = nums[ nums.length >> 1 ];
  } else {
    const index = nums.length >> 1;
    mid = Math.round((nums[ index ] + nums[ index - 1 ]) / 2);
  }
  return nums.reduce((total, item) => total += Math.abs(mid - item), 0)
};
```