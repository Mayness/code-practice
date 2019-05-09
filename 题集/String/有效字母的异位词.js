// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。

// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

/** way2
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    const newT = t.replace(s[i], '');
    // 如果转换后仍然和之前一样，则证明这个字符不在t中，则代表两字符不一样
    if (newT === t) {
      return false
    } else {
      t = newT;
    }
  }
  return true;
};