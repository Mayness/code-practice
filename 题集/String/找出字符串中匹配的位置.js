// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
// 示例 1：

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[]
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let res = [];  
  const getRange = function(currentArray, key = 0, currStr = '') {
    for (let i=0;i<currentArray.length;i++) {
      let sumWord = currStr + currentArray[ i ];
      if (key < words.length - 1) {
        const newArray = currentArray.slice(0);
        newArray.splice(i, 1);
        getRange(newArray, key+1, sumWord);
      } else {
        const iArray = matchAllIndex(s, sumWord);
        if (iArray.length > 0) {
            res = res.concat(iArray);
        }
      }
    }
  }
  getRange(words);
  return Array.from(new Set(res));
}

function matchAllIndex(str, word) {
  const array = [];
  const match = function(index = 0) {
    const ws = str.indexOf(word, index);
    if (ws > -1) {
      array.push(ws);
      match(ws+1);
    }
  }
  match(word);
  return array;
}

const res = findSubstring('24gfdsha3cdacafg246451231ghhh24fdcadgddgsdaffd253524fdgryef', ['24','fd', 'ca', 'dg']);
console.log(res);