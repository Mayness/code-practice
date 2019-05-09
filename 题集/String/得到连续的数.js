function solution(list){
  let newList = [];
  for(let item = 0; item < list.length - 1; item++) {
    newList.push(list[ item ], list[ item + 1 ] - list[ item ] === 1 ? '@' : '!')
  }
  newList.push(list[ list.length -1 ]);
  return newList.join('').replace(/(-?\d*)@(-?\d*@)+(-?\d*)/g, '$1-$3').replace(/[@!]/g, ',');
}