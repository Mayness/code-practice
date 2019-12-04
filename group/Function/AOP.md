```javascript
Function.prototype.before = function(fn) {
  const self = this;
  return function() {   // 返回Function以便于链式调用
    fn.apply(self, arguments);
    return self.apply(self, arguments);
  };
};


Function.prototype.after = function(fn) {
  const self = this;
  // 这个时候的 self 等于 test.before 函数，其中test.before函数中又包含test函数
  return function() {
    const ret = self.apply(self, arguments);
    fn.call(self, ret);
    return ret;
  };
};

const test = function(val) {
  return 2;
};

const fun = test
  .before(function(val) {
    return val + 1;
  })
  .after(function(val) {
    console.log(val);
  });
const value = fun(1);
console.log(value);

// 解析为：
function main() {
  (function before() {
    test();
  }.apply());
  (function after() {}.call());
}
```
