function getPINs(observed) {
  const map = {
    1: [1,2,4],
    2: [1,2,3,5],
    3: [2,3,6],
    4: [1,4,5,7],
    5: [2,4,5,6,8],
    6: [3,5,6,9],
    7: [4,7,8],
    8: [5,7,8,9,0],
    9: [6,8,9],
    0: [8,0],
  };
  let total = [];
  // 递归要点：先写几个 再化成 递归操作
  const multa = function(key = 0, sum = '') {
    for (const item of map[ parseInt(observed.slice(key, key+1)) ]) {
      // 通过闭包进行存储
      const curr = sum + item;
      if (key < observed.length - 1) {
        multa(key + 1, curr);
      } else {
        total.push(curr);
      }
    }
    return total;
  }
  return multa();
}