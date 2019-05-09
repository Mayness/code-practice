function fun(text) {
  // 匹配重复出现的字符 （.）是任意字符,如果只匹配重复的数字则可以换成\d  (?=.*\1) 是断言 表示任意字符与第一个捕获的内容至少出现了两次
  const array = text.match(/(.)(?=.*\1)/g);
  // return Array.from(new Set(array));
  return array.join('').replace(/(.)(?=.*\1)/g, '');  // 也可用作得到重复的数
}

const jj = fun('asfsadghdfhdfh水是打发的的打发的');
console.log(jj);