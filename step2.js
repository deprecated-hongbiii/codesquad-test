// ---------------------● 2단계: 평면 큐브 구현하기 ●---------------------

const planeCube = [
  ['R', 'R', 'W'], 
  ['G', 'C', 'W'], 
  ['G', 'B', 'B']
];

function rotL(array) {
  const dupArr = [...array];
  const firstElem = dupArr.shift();
  return [...dupArr, firstElem];
}

// const command = {
//   'U': ,
//   'U\'': ,
//   'R': ,
//   'R\'': ,
//   'L': ,
//   'L\'':
//   'D': ,
//   'D\'': ,
// }

function rotHorizontal(planeCube, rowIndex) {
  let dupPlaneCube = [...planeCube.map(e => [...e])];
  let row = dupPlaneCube[rowIndex];
  row = rotL(row);
  dupPlaneCube[rowIndex] = row;
  return dupPlaneCube;
}

function rotVertical(planeCube, colIndex) {
  
}

// ---------------------● test ●---------------------

console.log(rotHorizontal(planeCube, 2));

// ---------------------● node.js 입력 받기 ●---------------------

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on("line", function(line) {
//   pushWord(line);
//   rl.close();
// }).on("close", function() {
//   process.exit();
// });
