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
  if(int > 0) return true;
  if(int < 0) return false;
}

function rotR(word, int, direction) {

}

makeData('apple 3 R');

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

