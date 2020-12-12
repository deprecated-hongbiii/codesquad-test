// ---------------------● 3단계: 루빅스 큐브 구현하기 ●---------------------
// 시계 방향의 명령어
// 1. 해당 명령어 면 시계방향 회전
// 2. 인접한 4 배열 rotL

// 반시계 방향의 명령어
// 1. 해당 명령어 면 시계방향 회전 3번
// 2. 인접한 4배열 rotL 3번

// 쏘 ~~~~~~~~~~~ 심플 !!!!! 할 수 있다 !!!!!!!
// 배열에 포함되어 있는지 아닌지 판단 : arr.includes('something')

const direction = {
  clockwise: ['U', 'F', 'R', 'B', 'L', 'D'],
  counterClockwise: ['U\'', 'F\'', 'R\'', 'B\'', 'L\'', 'D\'']
}

// const adjoined = {
//   // 나열 순서: top-left-bottom-right 이놈들 배열을 rotL 할거임
//   'U': {
//     top: , // B의 0 row
//     left: ,// L의 0 row
//     bottom: , // F의 0 row
//     right: , // R의 0 row
//   },
//   'F': {
//     top: , // U의 2 row
//     left: , // L의 2 col
//     bottom: , // D의 0 row
//     right: , // R의 0 col
//   },
//   'R': {
//     top: , // U의 2 col
//     left: , // F의 2 col
//     bottom: , D의 2 col
//     right: , // B의 0 col
//   },
//   'L': {
//     top: , // U의 0 col
//     left: , // B의 2 col
//     bottom: , // D의 0 col
//     right: , // F의 0 col
//   },
//   'B': {
//     top: , // U의 0 row
//     left: , // R의 2 col
//     bottom: , D의 2 row
//     right: , L의 0 col
//   },
//   'D': {
//     top: , // F의 2 row
//     left: , // L의 2 row
//     bottom: , // B의 2 row
//     right: , // R의 2 row
//   }
// }

function getRow(array2D, rowIndex) {
  return array2D[rowIndex];
}

function getCol(array2D, colIndex) {
  return [array2D[0][colIndex], array2D[1][colIndex], array2D[2][colIndex]];
}

function isClockwise(command) {
  // upperCase로 바꾸는 작업 필요하면 추가하기.
  return direction.clockwise.includes(command);
}

function rotL(array) {
  const dupArr = [...array];
  const firstElem = dupArr.shift();
  return [...dupArr, firstElem];
}

function rotClockwise90degrees() {

}