## 和可被 K 整除的子数组
给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

 
示例：
```
输入：A = [4,5,0,-2,-3,1], K = 5
输出：7

解释：
有 7 个子数组满足其元素之和可被 K = 5 整除：
[4, 5, 0, -2, -3, 1], 
[5], 
[5, 0], 
[5, 0, -2, -3], 
[0], 
[0, -2, -3], 
[-2, -3]
```

提示：
```
1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000
```

From: [和可被 K 整除的子数组](https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/)

## 分析
此题和[和为s的连续正数序列](./和为s的连续正数序列.md)类似，但有区别的是求能被`K`整的集合。   
首先还是和题1一样的思路，某个集合`f(i - j) = f(i) - f(j)`，那么这其中的余数是否满足为0，即判断 `f(i - j) % 5 === 0` 满足的集合。  
同样先用`map`来保存每一个从0~i集合的值，即`f(i) = f[ i - 1 ] + A[ i ]`   
得出以上后可以以最小余数进行计算，将以上每个值 `f(i) = f(i) % k`，因为若要被`k`整除，则需要满足`f(i - j)`的余数之差能被`k`整除。   
那么现在问题就是能被`k`整除的数字有那么多，不可能遍历所有`f(i - j)`来计算，因此这里需要选取满足当条件的`k`值。由于`f(i)`中已经`%k`，因此其范围应该在`[-k, 0, k]`。这里举一个例子：  
若`k`为5，那么其可以取到的最小余数为`-4`，最大余数为`4`。  
同样，若`f(i) - f(j)`差值其最大为`4 - (-4) = 8`，最小为`(-4) - 4 = -8`，由于不能超过`k`本身，因此两者相减需要满足最小为`-5`，最大为`5`，同时还不要忘了`0`，因此两者需要寻找满足条件的`[-5, 0, 5]`的余数差值。总结下来就是`[ -k, 0, k ]`

## 解答
```javascript
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  const sumArr = [];
  for (let i = 0; i < A.length; i++) {
    sumArr[ i ] = ~~sumArr[ i - 1 ] + A[ i ];
  }
  const mod = [ -K, 0, K ];
  // 这里需要先记录0，因为需要考虑数字本身满足A[ i ] % k === 0
  const map = new Map([[0, 1]]);
  let res = 0;
  for (let i = 0; i < sumArr.length; i++) {
    const val =  sumArr[ i ] % K;
    for (let item of mod) {
      /* 
      *   f(i) - f(j) = item
      *   即需要找寻 f(j) = f(i) - item;
      */
      const need = val - item;
      if (map.has(need)) {
        res += map.get(need);
      }
    }
    map.set(val, ~~map.get(val) + 1);
  }
  return res;
};
```