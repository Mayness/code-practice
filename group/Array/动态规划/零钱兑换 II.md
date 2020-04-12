## 零钱兑换 II
给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 

 示例 1:
```
输入: amount = 5, coins = [1, 2, 5]
输出: 4
解释: 有四种方式可以凑成总金额:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```
示例 2:
```
输入: amount = 3, coins = [2]
输出: 0
解释: 只用面额2的硬币不能凑成总金额3。
```
示例 3:
```
输入: amount = 10, coins = [10] 
输出: 1
```

注意:

你可以假设：
```
0 <= amount (总金额) <= 5000
1 <= coin (硬币面额) <= 5000
硬币种类不超过 500 种
结果符合 32 位符号整数
```

From: [零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/)

## 方法1 动态规划
### 分析
这题可以看做又前多少个硬币，可以组成多少钱，其中前硬币个数为`j`，钱的数量为`i`，其能组成多少种方式为`f(i, j)`。若少拿一个硬币，那么其组成的次数和少拿硬币的次数是相同的，即
```
f(i, j) = f(i, j - 1);
```
问题是现在正拿着的这个硬币可以和现有金币有多少种组合，拿这个硬币之后，其金币组成数量应该和`f(i - arr[ j ], j)`是一致的，因此状态方程应该为：
```
f(i, j) = f(i, j - 1) + f(i - arr[ j ], j);
```

### 解答
```javascript
var change = function(amount, coins) {
  const arr = coins.sort((a, b) => a - b);
  // 可选金币增加一个0的选项
  arr.unshift(0);
  // 金钱从0开始计算
  const dp = Array.from({ length: amount + 1 }, () => [ 0 ]);
  // 当金币为0时，将硬币的数量置为1，例如5金币和[5]，可以得到dp[ 5 - 5 ][ 5 ] = 1，代表有一种可选方案
  dp[0] = new Array(coins.length).fill(1);
  for (let i = 1; i <= amount; i++) {
    for (let j = 1; j < arr.length; j++) {
      dp[ i ][ j ] = dp[ i ][ j - 1 ];
      if (arr[ j ] > i) continue;
      dp[ i ][ j ] += dp[ i - arr[ j ] ][ j ];
    }
  }
  return dp[ amount ][ coins.length - 1 ];
};
```

## 方法2 动态规划 + 压缩路径

### 分析
通过遍历金币种类，来和之前的方案相加。遍历金币是不会和之前的方案重合的。   
例如：
```
amount = 5, coins = [1, 2, 5]
先遍历金币种类为1的情况，其组成结果都为1
遍历金币2，在金币为5时，其数量是在f(5 - 2)基础上得来的，f(3)又f(1)得来，因此 f(3) = f(1) + f(2 - 2)，由于f(0)、f(1)都为1，因此f(3) = 2，再加上原来1的情况本来就有1种，因此f(5) = 3
遍历金币5，f(5 - 5) = f(0) = 1，因此这里f(5) = 1 + f(5) = 4
```


### 解答
```javascript
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  // 默认得到0金钱时就有一种银币情况
  dp[ 0 ] = 1;
  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i >= coin) {
        dp[ i ] += dp[ i - coin ];
      }
    }
  }
  return dp[ dp.length - 1 ];
};
```