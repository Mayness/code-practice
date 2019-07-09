

var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let num = [];
  let diff = 0;
  for (let i = 1; i < s.length; i++) {
    let j = 0;
    let k = 0;
    // 奇数
    while(s[ i - j ] && s[ i + j ] && s[ i - j ] === s[ i + j ]) {
      j++;
    }
    // 偶数
    while(s[ i - k - 1 ] && s[ i + k ] && s[ i - k - 1 ] === s[ i + k ]) {
      k++;
    }
    const range = j > k ? [ i - j + 1, i + j ]  : [  i - k, i + j ];
    num = range[ 1 ] - range[ 0 ] > diff ? range : num;
  }
  return s.slice(i - k, i + k);
};

const res = longestPalindrome('cbbdd');
console.log(res);