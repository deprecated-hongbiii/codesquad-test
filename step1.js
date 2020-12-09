// ---------------------● 1단계: 단어 밀어내기 ●---------------------

// input을 객체 형태의 데이터로 변환
function makeData(input) {
  const dataArr = input.split(' ');
  const data = {
    word: dataArr[0],
    int: Number(dataArr[1]),
    direction: dataArr[2]
  }

  if(!isPositive(data.int)) {
    modifyData(data);
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

// 오른쪽으로 미는 함수
function rotR(word, rotNum) {
  let wordArr = word.split('');
  const length = word.length;

  while (rotNum > 0) {
    let temp = wordArr[length - 1];
    wordArr.pop();
    wordArr.unshift(temp);
    rotNum -= 1;
  }
  word = wordArr.join('');
  return word;
}

// 최종 실행 함수
function pushWord(input) {
  let data = makeData(input);
  const word = data.word;
  const rotNum = data.int % word.length;
  const direction = data.direction;
  
  if(rotNum === 0) {
    console.log('결과: ', word);
    return
  }

  if(direction === 'R' || direction === 'r') {
    console.log('결과: ', rotR(word, rotNum));
    return
  }

  if(direction === 'L' || direction === 'l') {
    const rightRotNum = word.length - rotNum;
    console.log('결과: ', rotR(word, rightRotNum));
    return
  }
}

// ---------------------● node.js 입력 받기 ●---------------------

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  pushWord(line);
  rl.close();
}).on("close", function() {
  process.exit();
});
