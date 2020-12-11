// ---------------------● 2단계: 평면 큐브 구현하기 ●---------------------

const planeCube = [
  ['R', 'R', 'W'], 
  ['G', 'C', 'W'], 
  ['G', 'B', 'B']
];

const command = {
  'U': (e) => rotHorizontal(e, 0),
  'U\'': (e) => rotHorizontalTwice(e, 0),
  'R': (e) => rotVertical(e, 2),
  'R\'': (e) => rotVerticalTwice(e, 2),
  'L': (e) => rotVerticalTwice(e, 0),
  'L\'': (e) => rotVertical(e, 0),
  'D': (e) => rotHorizontalTwice(e, 2),
  'D\'': (e) => rotHorizontal(e, 2),
}

// --------------------- 회전 (밀어내기) 관련 함수들 ---------------------

function rotL(array) {
  const dupArr = [...array];
  const firstElem = dupArr.shift();
  return [...dupArr, firstElem];
}

function rotHorizontal(dupPlaneCube, rowIndex) {
  let row = dupPlaneCube[rowIndex];
  row = rotL(row);
  dupPlaneCube[rowIndex] = row;
  return dupPlaneCube;
}

function rotHorizontalTwice(planeCube, rowIndex) {
  const temp = rotHorizontal(planeCube, rowIndex);
  return rotHorizontal(temp, rowIndex);
}

function rotVertical(dupPlaneCube, colIndex) {
  let col = [dupPlaneCube[0][colIndex], dupPlaneCube[1][colIndex], dupPlaneCube[2][colIndex]];
  col = rotL(col);
  dupPlaneCube[0][colIndex] = col[0];
  dupPlaneCube[1][colIndex] = col[1];
  dupPlaneCube[2][colIndex] = col[2];
  return dupPlaneCube;
}

function rotVerticalTwice(planeCube, colIndex) {
  const temp = rotVertical(planeCube, colIndex);
  return rotVertical(temp, colIndex);
}

// --------------------- input 데이터 관련 함수들 ---------------------

function splitInput(input) {
  let inputArr = input.split('').map((char) => char.toUpperCase());
  for(let i = 0; i < inputArr.length; i++) {
    if(inputArr[i] === "'") inputArr[i - 1] += "'";
  }
  inputArr = inputArr.filter((char) => char !== "'");
  return inputArr;
}

// ------------------------- 최종 실행 함수 -------------------------

function init(line) {
  let inputArr = splitInput(line);
  let dupPlaneCube = planeCube.map(e => [...e]); // 복사를 여기서 하자.
  
  inputArr.forEach((input) => {
    dupPlaneCube = command[input](dupPlaneCube)
    console.log(dupPlaneCube);
  })
}
// ' <<<<<<<<<< 이놈 처리하는 함수 만들기
// ---------------------● test ●---------------------

// console.log(rotVerticalTwice(planeCube, 2));

// ---------------------● node.js 입력 받기 ●---------------------

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CUBE> '
});

console.log('초기 상태');
console.log(planeCube);
rl.prompt();
rl.on("line", function(line) {
  // 이 부분에 실행 함수 입력
  init(line);
  rl.close();
}).on("close", function() {
  process.exit();
});
