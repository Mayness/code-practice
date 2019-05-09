function sumStrings(a = '0', b = '0') {
  let result = '';
  let carry = 0;
  let A = a.split(''), B = b.split('');

  while(A.length || B.length || carry) {
    carry += ~~A.pop() + ~~B.pop();
    s = carry % 10 + result;
    carry = carry > 9 ? 1 : 0;
  }

  return result.replace(/^[0]*/g, '');
}

sumStrings('12654272432143241235223', '32415475684524');


//  另外一道题 +1 一样的原理
// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:

// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = null;
  let result = '';
  while(digits.length || carry) {
      carry = ~~digits.pop() + (carry === null ? 1 : carry)
      result = carry%10 + result;
      carry = Math.floor(carry/10);
  }
  return result.split('');
};