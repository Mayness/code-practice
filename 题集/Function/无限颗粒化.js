function add(num) {
  let sum = 0;
  const plus = (n) => {
    sum += n;
    return plus;
  }
  plus.toString = function () {
    return sum;
  }
  return plus(num);
}

const res = add(1)(2)(3);