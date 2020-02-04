## Pow(x, n)

实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:

```
输入: 2.00000, 10
输出: 1024.00000
```

示例 2:

```
输入: 2.10000, 3
输出: 9.26100
```

示例 3:

```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```

说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

## 方法1：二分法 + 循环
### 分析
可以使用二数字法来解决，例如：  
myPow(2, 10) = myPow(2, 5) * 2 = myPow(2, 2) * 4 + myPow(2, 2);  


## 解答
```javascript
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  let res = 1;
  while (n) {
    if (n % 2) {
      n--;
      // 为单数的时候收集结果
      res *= x;
    }
    if (n > 1) {
      n /= 2;
      x *= x;
    }
  }
  return res;
};
```

## 方法2：二分法 + 递归
### 分析
思路和方法1一致，只不过改用递归

### 解答
```javascript
var myPow = function(x, n) {
  if (n === 0) return 1;
  let value = n < 0 ? 1/x : x;
  let power = Math.abs(n);
  function travel(currValue, currPower, currRes) {
    currRes *= currValue;
    power -= currPower;
    if (power >= 2 * currPower) {
      currRes = travel(currValue * currValue, 2 * currPower, currRes)
    }
    if (power >= currPower) {
      currRes *= currValue;
      power -= currPower;
    }
    return currRes;
  }
  return travel(value, 1, 1);
}
```
