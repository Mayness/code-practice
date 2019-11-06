## 第 k 个排列

给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

```
"123"
"132"
"213"
"231"
"312"
"321"
```

给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1, n!]。
示例 1:

```
输入: n = 3, k = 3
输出: "213"
```

示例 2:

```
输入: n = 4, k = 9
输出: "2314"
```

## 解法 1：暴力循环

### 分析

循环得到所有的情况，指定的 index 得到对应的结果

### 解答

```javascript
var getPermutation = function(n, k) {
  let index = 0;
  const getNumber = function(array, str) {
    if (array.length === 0 && ++index === k) {
      return str;
    }
    for (let i = 0; i < array.length; i++) {
      let currStr = str;
      const newArray = array.slice(0);
      currStr += newArray[i];
      newArray.splice(i, 1);
      const num = getNumber(newArray, currStr);
      if (num) return num;
    }
  };
  const generaArray = new Array(n).fill(0).map((_, index) => index + 1);
  return getNumber(generaArray, '');
};
```

## 解法 2：全排列

### 分析
1，用动态规划首先算出n个元素一共有多少种排列：
```
  n = 1   排列方式为1，即[1]
  n = 2   比上一种方式多个数字2，其插入的方式有两种，在1的前面或后面，即[1,2]、[2,1]
  n = 3   同样比n = 2多个数字3，在空隙中插入的方式有3种，同时n=2有两种方案，因此总共有 2*3 = 6，即[3,1,2], [1,3,2], [1,2,3], [3,2,1], [2,3,1], [2,1,3]
  .......
```
2，得出有多少种排列后，可以观察排列为n的数组
```
假设n = 3，排列大小顺序为

"123"
"132"
"213"
"231"
"312"
"321"

可以观察得到 每个数字的第一位 是又之前的位数的排列来组成的。假设k=3，字符串的第一位取决于 当前 k 和【上一位的排列方式的个数】的 商，这里上一位n = 2，排列方式为2，那么 Math.floor(3/2) = 1，那么这个时候就可以取出可取数字的valid =【1,2,3】中的valid[1] = 2。
接下来可取位置就剩下【1,2】，k 还剩 3%2 = 1，即k=1。继续循环。
需要注意的是当余数为0，这里实际得到的数其实是上一位。例如可以通过上面观查到若k=2时，结果为"132"，而得到的商为2/2 = 1，从valid =【1，2，3】中得到valid[ 1 ]的却是2，因此这里需要判断余数是否为0，若是0的话，则取 Math.floor(得到的商)-1
```


### 解答

```javascript
var getPermutation = function(n, k) {
  // 得到每一种排列个数组合
  let types = [1];
  for (let i = 1; i < n; i++) {
    types[i] = (i + 1) * types[i - 1];
  }
  // 提取n中可取数，若n=3，即[1,2,3]
  const array = new Array(n).fill('').map((_, index) => index + 1);
  let str = '';
  while (array.length - 1) {
    // 取出上一位一共有多少种排列
    const divisor = types[array.length - 2];
    // 得到余数
    const remain = k % divisor;
    // 这里需要注意，若余数为0，则实际取到的index需要减一，从例子就可以看出，该数是属于这个界点的最大值.
    const consult = remain === 0 ? Math.floor(k / divisor) - 1 : Math.floor(k / divisor);
    // 提取继续需要计算的k
    k = remain;
    // 当前的结果字符串
    str += array.splice(consult, 1);
    // 既然属于界点的最大值，后续可以不用再计算
    if (remain === 0) {
      return str + array.sort((a, b) => b - a).join('');
    }
  }
  // 还剩下数组的最后一位则直接拼接
  return str + array[0];
};
```
