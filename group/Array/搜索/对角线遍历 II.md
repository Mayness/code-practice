## 对角线遍历 II
给你一个列表 nums ，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 nums 中对角线上的整数。

 

示例 1：
<img src="../../../static/1424-a.png"/>
```
输入：nums = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,4,2,7,5,3,8,6,9]
```
示例 2：
<img src="../../../static/1424-b.png"/>
```
输入：nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
输出：[1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
```
示例 3：
```
输入：nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
输出：[1,4,2,5,3,8,6,9,7,10,11]
```
示例 4：
```
输入：nums = [[1,2,3,4,5,6]]
输出：[1,2,3,4,5,6]
```
From: [对角线遍历 II](https://leetcode-cn.com/problems/diagonal-traverse-ii)

## 分析
老实遍历会超时，此题可以聚合对角线的值
<img src="../../../static/1424-c.png"/>
又图可以通过计算其(i, j)坐标来得到对应系的值

## 解答
```javascript
var findDiagonalOrder = function(nums) {
  const table = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[ i ].length; j++) {
      table[ i + j ] = table[ i + j ] || []
      table[ i + j ].unshift(nums[ i ][ j ])
    }
  }
  let res = [];
  for (let key in table) {
    for (let item of table[ key ]) {
      res.push(item)
    }
  }
  return res;
};
```