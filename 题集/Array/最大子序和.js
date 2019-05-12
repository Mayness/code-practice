// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 初始化最大和、临时总和
  let maxTotal = sum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    // 如果当前和为负数 并且 小于当前数 则初始化临时和 ， 后续重新从这个下标开始计数
    if (sum < 0 && sum < nums[i]) sum = 0;
    sum += nums[i];
    // 与之前的最大数相比较
    maxTotal = Math.max(maxTotal, sum);
  }
  return maxTotal;
};