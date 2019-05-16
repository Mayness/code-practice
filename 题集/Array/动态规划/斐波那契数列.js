// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 :
//  输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
//  输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

// 思路：斐波那契数列
// f(n) = f(n - 2) + f(n - 1);

// way1: 递归。 由于递归耗性能
// var climbStairs = function(n) {
//   if (n === 2 || n === 1) return n;
//   return climbStairs(n - 2) + climbStairs(n - 1);
// };

// way2: 循环赋值
var climbStairs = function (n) {
  let a = 1;
  let b = 0;
  for (let item = 0; item < n; item++) {
    [a, b] = [a + b, a];
  }
  return a;
};