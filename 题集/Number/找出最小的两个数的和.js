function sumTwoSmallestNumbers(number) {
  const numbers = number.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  const min2 = Math.min(...numbers);
  return min + min2;
}
// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a, b) => a - b);
//   return numbers[ 0 ] + numbers[ 1 ];
// }
function getRomdom(length) {
  const romArray = [];
  for (let item = 0; item < length; item++) {
    romArray.push(parseInt(Math.random() * 10000))
  }
  return romArray;
}
const romArray = getRomdom(5);


console.time();
const minSum = sumTwoSmallestNumbers(romArray);
console.timeEnd();
console.log(minSum);