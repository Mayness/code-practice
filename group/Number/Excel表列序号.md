## Excel 表列序号

给定一个 Excel 表格中的列名称，返回其相应的列序号。

例如，

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

示例 1:

输入: "A"
输出: 1
示例 2:

输入: "AB"
输出: 28
示例 3:

输入: "ZY"
输出: 701  

From: [Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/submissions/)
## 分析

相当于一个对将 26 进制的数转化为 10 进制

## 解答

```javascript
var titleToNumber = function(s) {
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    res += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - 1 - i);
  }
  return res;
};
```
