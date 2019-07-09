// wrong
function isPrime(num) {
  return num > 1 && (num <= 3 || !!(num % 2 && num % 3));
}

// 计数质数
// 统计所有小于非负整数 n 的质数的数量。

// 示例:

// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
var countPrimes = function (n) {
  let notPrimes = new Uint8Array(n);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!notPrimes[i]) {
      count++;
      for (let j = i; j * i < n; j++) {
        notPrimes[i * j] = true;
      }
    }
  }
  return count;
};