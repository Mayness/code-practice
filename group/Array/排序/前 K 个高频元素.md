## 前 K 个高频元素
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

## 解法1：hash + sort排序

### 分析
循环每一位的值，并存在一个hash表中，其中key为记录的数字，value为出现的次数数，若存在相同的值则对hash表记录数+1  
得到hash表后再用sort对value进行排序，取前k个hash表中的key即可

### 解答
```javascript
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    let value = map.get(nums[ i ]);
    map.set(nums[ i ], value ? ++value : 1);
  }
  let arr = Array.from(map).sort((a, b) => {
    return b[1] - a[1];
  });
  return arr.slice(0, k).map(item => item[0]);
};
```

## 解法2：hash + 数组索引排序

### 分析
先按照``方法1``取得hash表，关于排序的问题，可以以之前的value为现在key, 即求hash表的反hash表。  
然后将值铺平，从末尾开始取前k的数组  

### 解答
```javascript
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let value = map.get(nums[ i ]);
    map.set(nums[ i ], value ? ++value : 1);
  }
  // 求反hash表
  let newMap = [];
  for (let item of map) {
    const index = item[ 1 ];
    if (newMap[ index ]) {
      newMap[ index ].push(item[ 0 ]);
    } else {
      newMap[ index ] = [ item[ 0 ] ];
    }
  }
  // 这里由于官方不支持Array.prototyp.flat，因此换种写法
  // return newMap.flat().slice(-k).reverse();
  const res = [];
  // 去除数组中empty
  newMap = Object.values(newMap);
  let i = newMap.length - 1;
  // 这里求前k个数组  
  while(res.length < k) {
    const curr = newMap[ i ];
    res.push(curr.splice(-1, 1)[ 0 ]);
    if (curr.length === 0) i--;
  }
  return res;
}
```