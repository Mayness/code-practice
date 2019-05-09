// Task
// You are given a string s. Every letter in s appears once.

// Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

// Example
// For s = "abc", the result should be "bac". The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".

// Input/Output
// [input] string s

// unique letters (2 <= length <= 26)

// [output] a string

// middle permutation.

// way 1 递归得到每一个可能性，取中位
// function middlePermutation(s) {
//   const strArray = s.split('').sort();
//   const rangeArray = [];
//   const getRange = (currArray, key = 0 , currItem = '') => {
//     for (let item = 0; item < currArray.length; item++) {
//       let sum = currItem + currArray[ item ];
//       if ( key < strArray.length - 1 ) {
//         let newArray = currArray.slice(0);
//         newArray.splice(item, 1);
//         getRange(newArray, key+1, sum);
//       } else {
//         rangeArray.push(sum);
//       }
//     }
//   }
//   getRange(strArray);
//   return rangeArray[ Math.floor(rangeArray.length/2) - 1 ];
// }

// way 2  快速得出中位数，先计算首部，若是奇数位，这一位则取中位偏小1位，后面的数取最大数
function middlePermutation(s) {
  // 先进性排序
  const strArray = s.split('').sort();
  const getMid = function (array) {
    const even = array.length % 2;
    if (even) {
      // 如果第一位是奇数位，则先取中间的数
      const index = Math.floor(array.length/2);
      const mid = array[ index ];
      array.splice(index, 1);
      return mid + getMid(array);
    } else {
      // 如果是偶数位，则取 length/2 - 1 位，并且后面的数从大到小进行排列输出
      const index = array.length/2 - 1;
      const mid = array[ index ];
      array.splice(index, 1);
      return mid + array.sort((a,b) => b.charCodeAt()-a.charCodeAt()).join('')
    }
  }
  return getMid(strArray);
}