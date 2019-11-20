const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const ejs = require('ejs');

const entry = './group';
const template = {
  file: './.template/index.ejs',
  cache: './.template/cache.json'
};
const output = './README.md';
const resetUpdate = false;

(async function main() {
  const pathObj = await readFile(entry);
  const view = await ejs.renderFile(template.file, {
    data: pathObj
  });
  fs.writeFileSync(output, view);
})();

async function readFile(root) {
  let res = {};
  const original = fs.readFileSync(template.cache, 'utf-8');
  function recursionFile(res, root, origin = {}) {
    const data = fs.readdirSync(root);
    for (const item of data) {
      const filePath = path.join(root, item);
      const stat = fs.statSync(filePath);
      const rename = formatTag(item);
      if (stat.isDirectory()) {
        recursionFile((res[rename] = {}), filePath, origin[rename]);
      } else if (/(.md)$/g.test(item)) {
        let index = 0;
        const buffer = fs.readFileSync(filePath);
        const hash = crypto.createHash('sha256');
        hash.update(buffer);
        const fileHash = hash.digest('hex').slice(-12);
        // 比较内容hash，若修改则+1
        if (!resetUpdate && origin[rename]) {
          const num = origin[rename][1];
          index = origin[rename][2] !== fileHash ? num + 1 : num;
        }
        res[rename] = [filePath, index, fileHash];
      }
    }
  }
  recursionFile(res, root, JSON.parse(original));
  fs.writeFileSync(template.cache, JSON.stringify(res));
  return res;
}

function formatTag(name) {
  const regExp = /(.md|.js)$/;
  return name.replace(regExp, '');
}