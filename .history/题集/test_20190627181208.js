

var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let maxStr = '';
  for (let i = 1; i < s.length; i++) {
    let j = 1;
    let k = 0;
    // 奇数
    while(s[ i - j ] && s[ i + j ] && s[ i - j ] === s[ i + j ]) {
      j++;
    }
    // 偶数
    while(s[ i - k - 1 ] && s[ i + k ] && s[ i - k - 1 ] === s[ i + k ]) {
      k++;
    }
    console.log(j, k);
    const str = j >= k ? s.slice(i - j + 1, i + j + 1) : s.slice(i - k + 1, i + k + 1);
    maxStr = maxStr.length > str.length ? maxStr : str;
  }
  return maxStr;
};

const res = longestPalindrome('avva');
console.log(res);