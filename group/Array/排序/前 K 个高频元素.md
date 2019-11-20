给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:

```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
```

说明：

你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。

```javascript
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const newVal = map.has(key) ? map.get(key) + 1 : 1;
    map.set(key, newVal);
  }
  let arr = Array.from(map).sort((a, b) => {
    return b[1] - a[1];
  });
  return arr.slice(0, k).map(item => item[0]);
};
```
