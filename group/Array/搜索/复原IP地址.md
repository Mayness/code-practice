## 复原 IP 地址

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

```
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
```
From: [复原IP地址](https://leetcode-cn.com/problems/restore-ip-addresses/submissions/)
## 分析
ip地址的格式为 a.b.c.d   
每个以逗号分隔的格式为 0-9、10-99、100-199、200-255  
可以通过正则匹配出对应的字符串，然后再将余下的字符串再进行函数过滤。这里可以用递归    

## 解答

```javascript
var restoreIpAddresses = function(s) {
  const res = [];
  const reg = [/^\d/, /^[1-9]\d/, /^1\d{2}/, /^2[0-4]\d/, /^25[0-5]/];
  (function isMath(s, array = []) {
    /* 1，已知两个.号之间最多有3位ip数字 如果剩下的字符串不够剩下打点的字符串的最大长度则退出，例如：
      1.23456789876   如果之前只匹配1位，剩下11位又3个.号分隔，就算剩下位取最大长度，也仅值能分隔9位长，因此不符合后续要求，直接抛出
       2，当前字符串的长度小于还可以分配.号的个数，是不够分割的，例如：
      12.34   这里第一个.号就分割了两个ip字符，剩下3个则不能再划分剩余的2个ip字符串，因此不满足
       3，数组长度已经超过4位
    */
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

// 写法2，限制匹配的正则数量
var restoreIpAddresses = function(s) {
  if (!s.length) return [];
  const res = [];
  (function isMatch(str, array) {
    if (str === '') res.push(array.join('.'));
    const num = 3 - array.length;
    let currReg = [];
    const len = str.length;
    // 若当前匹配三位数的IP【100-199、200-255】，则需要保证  (剩余位 * 最大数IP 3位 + 3) >= len >= (剩余位 * 最小数IP 1位 + 3)
    if (len <= (num + 1) * 3 && len >= num + 3) {
      currReg.push(/^1\d{2}/, /^2[0-4]\d/, /^25[0-5]/);
    }
    // 匹配两位【10-99】，与以上同理，只不过又最后的3替换为2
    if (len <= num * 3 + 2 && len >= num + 2) {
      currReg.push(/^[1-9]\d/);
    }
    // 匹配1位【1-9】，3替换为1
    if (len <= num * 3 + 1 && len >= num + 1) {
      currReg.push(/^\d/);
    }
    // 最后currReg即为需要匹配的字符串数组
    for (let i = 0; i < currReg.length; i++) {
      const matchStr = str.match(currReg[i]);
      if (matchStr) {
        const copyArray = array.slice(0);
        copyArray.push(matchStr[0]);
        isMatch(str.replace(currReg[i], ''), copyArray);
      } else {
        continue;
      }
    }
  })(s, []);
  return res;
};
```
