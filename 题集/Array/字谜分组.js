// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
// 方法1:
var groupAnagrams = function(strs) {
  let map = {}
  for (let item of strs) {
    const charLen = getCharLen(item);
    if (map[ charLen ]) {
      map[ charLen ].push(item);
    } else {
      map[ charLen ] = [ item ];
    }
  }
  return Object.values(map);
};

var getCharLen = function(str) {
  const arr = new Array(26).fill(0);
  for (let item of str) {
    const diff = item.charCodeAt() - 97;
    // +1 是为了处理重复的字段 例如：boo、obb
    arr[ diff ] += 1;
  }
  return arr.join('');
}


const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res);

// 方法2：循环排序比较