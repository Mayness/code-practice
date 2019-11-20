// 该方法也是vue种的方法
const hyphenate = cached((str) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})