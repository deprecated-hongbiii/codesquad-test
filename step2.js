// ---------------------● 2단계: 평면 큐브 구현하기 ●---------------------

let planeCube = [
  ['R', 'R', 'W'], 
  ['G', 'C', 'W'], 
  ['G', 'B', 'B']
];

function rotL(array) {
  const dupArr = [...array];
  const firstElem = dupArr.shift();
  return [...dupArr, firstElem];
}

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
