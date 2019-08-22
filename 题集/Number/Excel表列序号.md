## Excel表列序号

给定一个Excel表格中的列名称，返回其相应的列序号。

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

## 分析
相当于一个对将26进制的数转化为10进制

## 解答
```javascript
var titleToNumber = function(s) {
  let i = 0;
  let sum = 0;
  while(i < s.length) {
    sum += Math.pow(26, i)*(s[ s.length - 1 - i ].charCodeAt() - 64)
    i++
  }
  return sum;
};
```