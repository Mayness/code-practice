## x 的平方根

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:
```
输入: 4
输出: 2
```

示例 2:
```
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```

## 分析
假设 数字x的平方根是A，那么A肯定满足以下情况：  
1 < A < x  
Math.pow(A, 2) =< x < Math.pow(A+1, 2)  
可以利用二分法寻找该数  

## 解答
```javascript
var mySqrt = function(x) {
    if (x === 0) return 0;
    let left = 1;
    let right = x;
    while(left + 1 < right) {
      const mid = (left + right) >>> 1;
      if (Math.pow(mid, 2) > x) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return left;
};
```