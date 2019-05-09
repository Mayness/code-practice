function findEvenIndex(arr)
{
  // 错误点：利用reduce进行求和，第二个参数为基础值：即初始化的a
  let right = arr.slice(1, arr.length).reduce((a,b) => a+b, 0);
  let left = 0;
  for (let item = 0; item < arr.length - 1; item++) {
    if (left === right) return item;  // 再循环中一般用break、continue 进行结束循环，而return 会直接抛出函数
    left += arr[ item ];
    right -= arr[ item+1 ];
  }
  return -1;
}