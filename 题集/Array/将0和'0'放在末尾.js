function removeZeros(array) {
  const head = []
  const tail = []
  for (const e of array) {
    if (e === 0 || e === "0") {
      tail[tail.length] = e
    } else {
      head[head.length] = e
    }
  }
  return [...head, ...tail]
}