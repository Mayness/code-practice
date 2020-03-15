## 求众数 II

给定一个大小为  n  的数组，找出其中所有出现超过  ⌊ n/3 ⌋  次的元素。

说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。

示例  1:

```
输入: [3,2,3]
输出: [3]
```

示例 2:

```
输入: [1,1,1,3,3,2,2,2]
输出: [1,2]
```

From: [求众数 II](https://leetcode-cn.com/problems/majority-element-ii)

## 分析
由于要求空间复杂度为O(1)，首先排除哈希 查询。  
通过摩尔投票法，参考[多数元素](https://leetcode-cn.com/problems/majority-element/)  
按照之前的题意，由于假设数组中必定存在多数元素，因此从数组中选出大于`n/2`的元素，其出现的个数只可能有一种，可以使用投票方式，拟定一个元素来记录，即从第一个数开始投票数`count = 1`，是相同的数就`+1`，不是相同的数就`-1`，若该数减到0就重新替换数字记数，最后得到的这个数即多数   
现在题意又原来的`n/2`改为`n/3`，并且不一定存在这个数，那么其出现的次数一定是小于等于2的。因此这里可以拟定两个元素来代替之前题的拟定一个元素。思路一致。需要注意的是，结果的个数是小于等于2的，到最后确定出两个元素后，需要再次遍历，确认是否大于`n/3`的个数


## 解答
```javascript
var majorityElement = function(nums) {
  let candidate1 = Number.MAX_SAFE_INTEGER;
  let candidate2 = Number.MAX_SAFE_INTEGER;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (candidate2 !== nums[i] && count1 === 0) {
      candidate1 = nums[i];
    } else if (count2 === 0) {
      candidate2 = nums[i];
    }
    if (nums[i] === candidate1) {
      count1++;
    } else if (nums[i] === candidate2) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let item of nums) {
    if (item === candidate1) {
      count1++;
    } else if (item === candidate2) {
      count2++;
    }
  }
  const result = [];
  // 再次确认
  const len = nums.length / 3;
  if (count1 > len) result.push(candidate1);
  if (count2 > len) result.push(candidate2);
  return result;
};
```
