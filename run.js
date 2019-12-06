const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const ejs = require('ejs');

const entry = './group';
const template = {
  base: '.template',
  file: 'index.ejs',
  cache: 'cache.json'
};
const output = './README.md';
const resetUpdate = false;

(async () => {
  const pathObj = await readFile(entry);
  const view = await ejs.renderFile(path.join(template.base, template.file), {
    data: pathObj
  });
  fs.writeFileSync(output, view);
})();

/**
 * 递归读取文件，并输出文件目录树
 * @param {string} root 入口路径path
 * @returns {object}
 * path: {
 *   filename: [ filePath, updateNumber, fileHash ]
 *              [or]
 *   path: {
 *      xxx: xxxx 
 *   }
 * } 
 */
async function readFile(root) {
  let res = {};
  let original;
  const cachePath = path.join(template.base, template.cache);
  // 检测是否有缓存文件
  try {
    fs.accessSync(cachePath);
    original = fs.readFileSync(cachePath, 'utf-8');
  } catch {
    original = '{}';
  }
  function recursionFile(res, root, origin = {}) {
    const data = fs.readdirSync(root);
    for (const item of data) {
      const filePath = path.join(root, item);
      const stat = fs.statSync(filePath);
      const rename = formatTag(item);
      if (stat.isDirectory()) {
        recursionFile((res[rename] = {}), filePath, origin[rename]);
      } else if (/(.md)$/g.test(item)) {
        let update = 0;
        const buffer = fs.readFileSync(filePath);
        const hash = crypto.createHash('sha256');
        hash.update(buffer);
        const fileHash = hash.digest('hex').slice(-12);
        // 比较内容hash，若修改则+1
        if (!resetUpdate && origin[rename]) {
          const num = origin[rename][1];
          update = origin[rename][2] !== fileHash ? num + 1 : num;
        }
        res[rename] = [filePath, update, fileHash];
      }
    }
  }
  recursionFile(res, root, JSON.parse(original));
  fs.writeFileSync(cachePath, JSON.stringify(res));
  return res;
}

function formatTag(name) {
  const regExp = /(.md|.js)$/;
  return name.replace(regExp, '');
}
