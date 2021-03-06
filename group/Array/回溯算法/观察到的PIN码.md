## 观察到的 PIN 码

好吧，侦探，我们的一位同事成功地观察了我们的目标人物，强盗罗比。我们跟着他去了一个秘密仓库，在那里我们假设找到所有偷来的东西。这个仓库的门由电子密码锁固定。不幸的是，当 Robby 进入时，我们的间谍不确定他看到的 PIN 码。

键盘具有以下布局：

```
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
```

他注意到 PIN 码 1357，但他也说过，他看到的每个数字都可能实际上是另一个相邻的数字（水平或垂直，但不是对角线）。例如，1 它也可以是 2 或 4。并且代替 5 它也有可能是 2，4，6 或 8。

例如

```
输入："8"
输出：["5", "7", "8", "9", "0"],


输入："11"
输出：["11", "22", "44", "12", "21", "14", "41", "24", "42"],
```

## 分析
用到回溯递归，遍历当前所有可能的数，递归位数得到结果

## 解答

```javascript
function getPINs(observed) {
  const map = {
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
    0: [8, 0]
  };
  const total = [];
  const multa = function(key = 0, sum = '') {
    for (let item of map[observed.slice(key, key + 1)]) {
      const curr = sum + item;
      if (key < observed.length - 1) {
        multa(key + 1, curr);
      } else {
        total.push(curr);
      }
    }
    return total;
  };
  return multa();
}
```
