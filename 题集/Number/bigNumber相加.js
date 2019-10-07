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