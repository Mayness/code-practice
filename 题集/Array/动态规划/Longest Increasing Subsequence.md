## Longest Increasing Subsequence

给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

```
输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
```

说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

## 分析&解答

方法 1：使用回溯递归，然而超过时间限制

```javascript
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  const getList = function(list, sum, end) {
    let total = sum;
    for (let i = 0; i < list.length; i++) {
      let newSum = sum;
      let newEnd = end;
      if (list[i] > end) {
        newEnd = list[i];
        newSum++;
      }
      total = Math.max(total, getList(list.slice(i + 1), newSum, newEnd));
    }
    return total;
  };
  return getList(nums, 0, Number.MIN_SAFE_INTEGER);
};
```

方法 2：  
使用单次路径动态规划。
先假设每一次都会走到末尾，那么每当增加一个数组长度时，就需要满足新增的该数必须大于之前存储的所有连续递增的数组。

假设i是当前数组的长度，那么dp[i]则表示在``当前长度``下的最长的可连续数组的长度。

已知条件：  
dp[ 0 ] = 0
dp[ 1 ] = 1
那么单次路径下的公式为：  
dp[i] = Math.max(dp[i], dp[j] + 1);  
因为需要加上最后一步，所以需要+1  

```
例如，原数组为 [4,2,1,3];
dp[ 0 ] = 0   即 []
dp[ 1 ] = 1   即 [ 4 ]
dp[ 2 ] = 1   以2为末尾元素，前面只有元素4，并且大于该值，则最终结果还是1
dp[ 3 ] = 1   以1位末尾元素，前面有元素[4,2]，该值还是比之前数要小，所以还是1
dp[ 4 ] = 2   以3位末尾元素，前面有元素[4,2,1]，可以看出其中的2和1都小于该值，那么可以从2跳到当前位置，也可以从1跳到当前位置。即dp[ 2 ] + 1 和 dp[ 3 ] + 1，这里只需要拿到这两种情况的最大值即可，由于都一样，那么结果为2
```   
由于这里假设的是每一个末尾都必须走到，那么需要得到数组中最长增序的话，只需要得到每一个长度的最大值即可  

```javascript
const lengthOfLIS = nums => {
  const len = nums.length;
  if (!len) return 0;
  const dp = new Array(len).fill(1);
  let res = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};
```
