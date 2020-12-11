// ---------------------● 2단계: 평면 큐브 구현하기 ●---------------------

const planeCube = [
  ['R', 'R', 'W'], 
  ['G', 'C', 'W'], 
  ['G', 'B', 'B']
];

let dupPlaneCube = planeCube.map(e => [...e]); // 깊은 복사 방법

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

function rotHorizontal(planeCube, rowIndex) {
  let row = planeCube[rowIndex];
  row = rotL(row);
  planeCube[rowIndex] = row;
  return planeCube;
}

function rotHorizontalTwice(planeCube, rowIndex) {
  const temp = rotHorizontal(planeCube, rowIndex);
  return rotHorizontal(temp, rowIndex);
}

function rotVertical(planeCube, colIndex) {
  let col = [planeCube[0][colIndex], planeCube[1][colIndex], planeCube[2][colIndex]];
  col = rotL(col);
  planeCube[0][colIndex] = col[0];
  planeCube[1][colIndex] = col[1];
  planeCube[2][colIndex] = col[2];
  return planeCube;
}

function rotVerticalTwice(planeCube, colIndex) {
  const temp = rotVertical(planeCube, colIndex);
  return rotVertical(temp, colIndex);
}

// ----------------- input 데이터 및 출력 관련 함수들 -----------------

function splitInput(input) {
  let inputArr = input.split('').map((char) => char.toUpperCase());
  for(let i = 0; i < inputArr.length; i++) {
    if(inputArr[i] === "'") inputArr[i - 1] += "'";
  }
  inputArr = inputArr.filter((char) => char !== "'");
  return inputArr;
}

function print2Darray(array2D) {
  array2D.forEach(array => {
    console.log(array.join(' '));
  })
  console.log(); // 한 줄 띄우기
}

// ------------------------- 최종 실행 함수 -------------------------

function init(line) {
  let inputArr = splitInput(line);
  
  inputArr.forEach((input) => {
    dupPlaneCube = command[input](dupPlaneCube)
    console.log();
    console.log(input);
    print2Darray(dupPlaneCube);
  })
}

// ---------------------● node.js 입력 받기 ●---------------------

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CUBE> '
});

console.log('초기 상태:');
print2Darray(planeCube);
rl.prompt();
rl.on("line", function(line) {
  if(line === 'Q' || line === 'q') {
    console.log('Bye~');
    rl.close();
  }
  init(line);
  rl.prompt();
}).on("close", function() {
  process.exit();
});
