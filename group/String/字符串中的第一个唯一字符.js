// way1 7496 ms
var firstUniqChar = function (s) {
  if (!s) return -1;
  const repeat = s.match(/(.)(?=.*\1)/g);
  if (!repeat) return 0;
  for (let i = 0; i < s.length; i++) {
    if (!repeat.includes(s[i])) {
      return i;
    }
  }
  return -1;
};

// way2  188 ms
/**
 * @param {string}
 * @return {number}
 */
const firstUniqChar = function(str) {
  if (str.length === 1) return 0;
  const set = new Set();
  for (let item = 0; item < str.length; item++) {
    if (!set.has(str[ item ]) && str.match(RegExp(str[ item ], 'g')).length === 1) {
      return item;
    }
    set.add( str[ item ] );
  }
  return -1;
}

