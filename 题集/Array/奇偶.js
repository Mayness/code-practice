// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers){
//   //your code here
//   // 错误点：slice返回一个新对象，并且不会改变原有对象
//   const checkoutArray = integers.slice(0,3);
//   let oddNum = 0;
//   for (const item of checkoutArray) {
//     if (item % 2 === 0) {
//       ++oddNum
//     }
//     if (oddNum === 2) {
//       // 错误点：break在for循环中中断循环
//       break;
//     }
//   }
//   return integers.find(item => {
//     const res = Math.abs(item%2);
//     if (oddNum >= 2) {
//       return res === 1;
//     } else {
//       return res === 0;
//     }
//   })
// }

function findOutlier(integers) {
  const isOdd = integers.slice(0, 3).filter(odd).length <= 1;
  return isOdd ? integers.find(odd) : integers.find(even);
}

function odd(val) {
  return Math.abs(val%2) === 0;
}

function even(val) {
  return Math.abs(val%2) === 1;
}


const res = findOutlier([0,1,2]);
console.log(res);