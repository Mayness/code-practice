// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

// 示例 1:

// 输入: 27
// 输出: true
// 示例 2:

// 输入: 0
// 输出: false
// 示例 3:

// 输入: 9
// 输出: true
// 示例 4:

// 输入: 45
// 输出: false
// 进阶：
// 你能不使用循环或者递归来完成本题吗？

var isPowerOfThree = function (n) {
  let right = 44; // Math.pow(3,44) 是在Number中的最大数
  let left = 0;
  while (left < right) {
    const mid = ~~((right + left) / 2);
    if (n > Math.pow(3, mid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return Math.pow(3, left) === n;
};