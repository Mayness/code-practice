// 鸡蛋掉落
// 你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N  共有 N 层楼的建筑。

// 每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。

// 你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。

// 每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。

// 你的目标是确切地知道 F 的值是多少。

// 无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？

 

// 示例 1：

// 输入：K = 1, N = 2
// 输出：2
// 解释：
// 鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
// 否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
// 如果它没碎，那么我们肯定知道 F = 2 。
// 因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
// 示例 2：

// 输入：K = 2, N = 6
// 输出：3
// 示例 3：

// 输入：K = 3, N = 14
// 输出：4

// WAY1  动态规划1
/*
  K 鸡蛋    N 楼层
  假设当前在x楼层，1 <= x <= N
  分两种情况：
  摔碎： 鸡蛋少一个 K-1     下一个楼层  x-1
  没摔碎： 鸡蛋不变 K       剩余楼层    N-x
  F(K, N) = Math.min( min, Math.max( F(K - 1, x - 1), F(K, N - x) ) + 1 )
  已知条件:  ( 鸡蛋与楼层的关系, 横轴从0递增楼层，纵轴从0递增鸡蛋鸡蛋 )
  0 0 0 0 0
  0 1 2 3 4
  0 1
  0 1
  保证每一次的概率相同
*/

// var superEggDrop = function(K, N) {
//   const eggArray = [];
//   for (let j = 0; j <= K; j++) {
//     eggArray[ j ] = [];
//     for (let i = 0; i <= N; i++) {
//       if (j === 0) {
//         eggArray[ 0 ].push(0)
//       } else {
//         if (j > 1 && i > 1) break;
//         eggArray[ j ].push(i);
//       }
//     }
//   }
//   for (let j = 2; j <= K; j++) {
//     for (let i = 2; i <= N; i++) {
//       let min = Number.MAX_SAFE_INTEGER;
//       for (let x = 1; x <= i; x++) {
//         min = Math.min(min, Math.max(eggArray[ j - 1 ][ x - 1 ], eggArray[ j ][ i - x ]) + 1);
//       }
//       eggArray[ j ][ i ] = min;
//     }
//   }
//   console.log(eggArray);
//   return eggArray[ K ][ N ];
// };

// const res = superEggDrop(10,50);
// console.log(res);

var superEggDrop = function (K, N) {
  let step = 0;
  array = Array(K + 1).fill([ 0 ]);
  do {
    step += 1;
    for (let i = 0; i <= K; i++) {
      if (i === 0) {
        array[ 0 ][ step ] = 0;
      } else {
        array[ i ][ step ] = array[ i - 1 ][ step - 1 ] + array[ i ][ step - 1 ] + 1;
      }
    }
  } while( array[ K ][ step ] <= N )
  console.log(array);
}
const res = superEggDrop(2, 8);
// console.log(res);