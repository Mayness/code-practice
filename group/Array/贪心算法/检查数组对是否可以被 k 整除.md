## 检查数组对是否可以被 k 整除

给你一个整数数组 arr 和一个整数 k ，其中数组长度是偶数，值为 n 。

现在需要把数组恰好分成 n / 2 对，以使每对数字的和都能够被 k 整除。

如果存在这样的分法，请返回 True ；否则，返回 False 。

示例 1：

```
输入：arr = [1,2,3,4,5,10,6,7,8,9], k = 5
输出：true
解释：划分后的数字对为 (1,9),(2,8),(3,7),(4,6) 以及 (5,10) 。
```

示例 2：

```
输入：arr = [1,2,3,4,5,6], k = 7
输出：true
解释：划分后的数字对为 (1,6),(2,5) 以及 (3,4) 。
```

示例 3：

```
输入：arr = [1,2,3,4,5,6], k = 10
输出：false
解释：无法在将数组中的数字分为三对的同时满足每对数字和能够被 10 整除的条件。
```

示例 4：

```
输入：arr = [-10,10], k = 2
输出：true
```

示例 5：

```
输入：arr = [-1,1,-2,2,-3,3,-4,4], k = 3
输出：true
```

提示：

```
arr.length == n
1 <= n <= 10^5
n 为偶数
-10^9 <= arr[i] <= 10^9
1 <= k <= 10^5
```

## 分析
需要检测`a+b`是否能被`k`整除，则需要满足`a%k + b%k`能够被k整除，因此这里将每个数的余数`remainItem`得出，并用一个`map`进行记录，若`map`中存在`k - remainItem`的数，则算一次组合。最后检测`map`是否为空即可。
需要注意的是，若出现余数`<0`，则将它等价为`k + remainItem`。例如`arr = [-4,1], k = 3`，在得出第一个余数为`-4%3 = -1`，等价为`3 + (-1) = 2`。因此第二个得出的余数是满足`3 - 1 = 2`，存在这个数则进行相抵扣。最后结果为`true`

## 解答

```javascript
var canArrange = function(arr, k) {
  const map = {};
  for (let item of arr) {
    let remain = item % k;
    remain = remain < 0 ? k + remain : remain;
    const num = map[k - remain];
    if (num !== undefined) {
      if (num === 1) {
        delete map[k - remain];
      } else {
        map[k - remain]--;
      }
    } else {
      remain = remain === 0 ? k : remain;
      map[remain] = (map[remain] || 0) + 1;
    }
  }
  return Object.keys(map).length === 0;
};
```
