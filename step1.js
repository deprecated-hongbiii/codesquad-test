// --------------- 1단계: 단어 밀어내기 ---------------

// 1. input을 객체 형태의 데이터로 변환
function makeData(input) {
  const dataArr = input.split(' ');
  const data = {
    word: dataArr[0],
    int: Number(dataArr[1]),
    direction: dataArr[2]
  }
  return data;
}

// 입력받은 정수가 양수인지 검사
function isPositive(int) {
  return (int > 0 ? true : false);
}

// 정수를 절댓값으로 변환
function toAbsolute(int) {
  return Math.abs(int);
}

function changeDirection(direction) {
  if(direction === 'R' || direction === 'r') {
    return 'L';
  }

  if(direction === 'L' || direction === 'l') {
    return 'R';
  }
}

// 정수 값에 따라 데이터 수정하는 함수 - int가 음수일 경우 실행
function modifyData(data) { // 객체 형태의 데이터를 받아옴
  data.int = toAbsolute(data.int);
  data.direction = changeDirection(data.direction);
  return data;
}

function rotR(word, int, direction) {
  
}

// ----------------- TEST ---------------------
let data = makeData('apple -3 l');
data = modifyData(data);
console.log(data);
// --------------------------------------------

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on("line", function(line) {
//   console.log("hello !", line);
//   console.log(line.length);
//   rl.close();
// }).on("close", function() {
//   process.exit();
// });

