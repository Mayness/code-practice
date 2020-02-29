## 不同路径 II

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

说明：m  和 n 的值均不超过 100。

示例  1:

```
输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

## 解答 1：回溯算法

### 分析

在当前位置上往右或者下移动，若遇见 1 则返回 0，并且需要将走过的路径置为 1，当前走完后再重置回原值。若其坐标到达右下角则返回 1，代表得到 1 种路径，通过栈调用来得到最后的和。  
但是这种做法的结果是超时的。

### 解答

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid.length) return 0;
  const vertical = obstacleGrid.length - 1;
  if (!obstacleGrid[0].length) return 0;
  const row = obstacleGrid[0].length - 1;
  if (obstacleGrid[vertical][row] === 1) return 0;
  return (function travel(x, y) {
    if (x > vertical || y > row || obstacleGrid[x][y] === 1) return 0;
    if (x === vertical && y === row) return 1;
    obstacleGrid[x][y] = 1;
    const sum = travel(x + 1, y) + travel(x, y + 1);
    obstacleGrid[x][y] = 0;
    return sum;
  })(0, 0);
};
```

## 解答2：动态规划 + 压缩路径
### 分析
其思路方式和[不同路径](./不同路径.md)一样，只不过需要考虑路径为1的点，则需要将结果重置回0

### 解答
```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid.length) return 0;
  const vertical = obstacleGrid.length - 1;
  if (!obstacleGrid[0].length) return 0;
  const row = obstacleGrid[0].length - 1;
  if (obstacleGrid[vertical][row] === 1 || obstacleGrid[0][0] === 1) return 0;
  const dp = [];
  for (let i = 0; i <= vertical; i++) {
    for (let j = 0; j <= row; j++) {
      if (obstacleGrid[ i ][ j ] === 1) {
        dp[ j ] = 0;
      } else {
        dp[ j ] = i === 0 && j === 0 ? 1 : ~~dp[ j - 1 ] + ~~dp[ j ]
      }
    }
  }
  return dp[row];
};
```