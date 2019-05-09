// 旋转图像
// 给定一个 n × n 的二维矩阵表示一个图像。

// 将图像顺时针旋转 90 度。

// 说明：

// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

// 示例 1:

// 给定 matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// 示例 2:

// 给定 matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// 原地旋转输入矩阵，使其变为:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const rotation = function (start, end) {
    for (let i = 0; i < end - start; i++) {
      const f1 = matrix[start][start + i];
      const f2 = matrix[start + i][end];
      const f3 = matrix[end][end - i];
      const f4 = matrix[end - i][start];
      matrix[start][start + i] = f4;
      matrix[start + i][end] = f1;
      matrix[end][end - i] = f2;
      matrix[end - i][start] = f3;
    }
    if (end - start > 0) {
      rotation(start + 1, end - 1);
    }
  }
  rotation(0, matrix.length - 1);
};

// 由于递归增加入栈函数，影响性能，因此后面改成双循环
var rotate2 = function (matrix) {
  let start = 0;
  let end = matrix.length - 1;
  while (start <= end) {
    for (let i = 0; i < end - start; i++) {
      const f1 = matrix[start][start + i];
      const f2 = matrix[start + i][end];
      const f3 = matrix[end][end - i];
      const f4 = matrix[end - i][start];
      matrix[start][start + i] = f4;
      matrix[start + i][end] = f1;
      matrix[end][end - i] = f2;
      matrix[end - i][start] = f3;
    }
    start += 1;
    end -= 1;
  }
};