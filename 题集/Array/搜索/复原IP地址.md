## 复原 IP 地址

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

```
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
```

##  分析

## 解答

```javascript
var restoreIpAddresses = function(s) {
  const res = [];
  const reg = [/^\d/, /^[1-9]\d/, /^1\d{2}/, /^2[0-4]\d/, /^25[0-5]/];
  (function isMath(s, array = []) {
    if (s.length > (4 - array.length) * 3 || s.length < 4 - array.length || array.length > 4) return;
    if (s === '' && array.length === 4) {
      res.push(array.join('.'));
      return;
    }
    for (let i of reg) {
      let matchStrArray;
      if ((matchStrArray = s.match(i))) {
        const str = s.replace(i, '');
        const copyArray = array.slice(0);
        copyArray.push(matchStrArray[0]);
        isMath(str, copyArray);
      }
    }
  })(s);
  return res;
};
```
