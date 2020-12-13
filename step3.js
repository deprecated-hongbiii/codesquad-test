// ---------------------● 3단계: 루빅스 큐브 구현하기 ●---------------------
// 시계 방향의 명령어
// 1. 해당 명령어 면 시계방향 회전
// 2. 인접한 4 배열 rotL

// 반시계 방향의 명령어
// 1. 해당 명령어 면 시계방향 회전 3번
// 2. 인접한 4배열 rotL 3번

// 인접 4면 돌리는 방법은 1. 꺼낸다. 2. 돌린다. 3. 다시 넣는다.

const direction = {
  clockwise: ['U', 'F', 'R', 'B', 'L', 'D'],
  counterClockwise: ['U\'', 'F\'', 'R\'', 'B\'', 'L\'', 'D\'']
}

const cube = {
  'U': [['W', 'W', 'W'], ['W', 'W', 'W'], ['W', 'W', 'W']],
  'F': [['G', 'G', 'G'], ['G', 'G', 'G'], ['G', 'G', 'G']],
  'R': [['R', 'R', 'R'], ['R', 'R', 'R'], ['R', 'R', 'R']],
  'L': [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']],
  'B': [['B', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']],
  'D': [['Y', 'Y', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'Y', 'Y']]
}
// Array.from({ length: 3 }, () => new Array(3).fill('B'))

let dupCube = {
  'U': cube.U.map(e => [...e]),
  'F': cube.F.map(e => [...e]),
  'R': cube.R.map(e => [...e]),
  'L': cube.L.map(e => [...e]),
  'B': cube.B.map(e => [...e]),
  'D': cube.D.map(e => [...e])
}

// 각 면에 인접한 4면의 행/열을 저장해둔 객체
// 방향은 해당 면을 기준으로 함

const adjoined = {
  'U': {
    top: getRow(dupCube.B, 0), // B의 0 row
    left: getRow(dupCube.L, 0),// L의 0 row
    bottom: getRow(dupCube.F, 0), // F의 0 row
    right: getRow(dupCube.R, 0), // R의 0 row
  },
  'F': {
    top: getRow(dupCube.U, 2), // U의 2 row
    left: getCol(dupCube.L, 2), // L의 2 col
    bottom: getRow(dupCube.D, 0), // D의 0 row
    right: getCol(dupCube.R, 0), // R의 0 col
  },
  'R': {
    top: getCol(dupCube.U, 2), // U의 2 col
    left: getCol(dupCube.F, 2), // F의 2 col
    bottom: getCol(dupCube.D, 2), // D의 2 col
    right: getCol(dupCube.B, 0), // B의 0 col
  },
  'L': {
    top: getCol(dupCube.U, 0), // U의 0 col
    left: getCol(dupCube.B, 2), // B의 2 col
    bottom: getCol(dupCube.D, 0), // D의 0 col
    right: getCol(dupCube.F, 0), // F의 0 col
  },
  'B': {
    top: getRow(dupCube.U, 0), // U의 0 row
    left: getCol(dupCube.R, 2), // R의 2 col
    bottom: getRow(dupCube.D, 2), // D의 2 row
    right: getCol(dupCube.L, 0), // L의 0 col
  },
  'D': {
    top: getRow(dupCube.F, 2), // F의 2 row
    left: getRow(dupCube.L, 2), // L의 2 row
    bottom: getRow(dupCube.B, 2), // B의 2 row
    right: getRow(dupCube.R, 2), // R의 2 row
  }
}

const command = {
  // 'U': (e) => {  },
  // 'F': ,
  // 'R': ,
  // 'L': ,
  // 'B': ,
  // 'D': ,
}

// --------------------- 행/열을 꺼내거나 집어넣는 함수들 ---------------------

function getRow(array2D, rowIndex) {
  return array2D[rowIndex];
}

function getCol(array2D, colIndex) {
  return [array2D[0][colIndex], array2D[1][colIndex], array2D[2][colIndex]];
}

function setRow(array2D, newRow, rowIndex) {
  array2D[rowIndex] = newRow;
}

function setCol(array2D, newCol, colIndex) {
  array2D[0][colIndex] = newCol[0];
  array2D[1][colIndex] = newCol[1];
  array2D[2][colIndex] = newCol[2];
}

//---------------------------------------------------------------------

function isClockwise(command) {
  // upperCase로 바꾸는 작업 필요하면 추가하기.
  return direction.clockwise.includes(command);
}

function rotL(array) {
  const dupArr = [...array];
  const firstElem = dupArr.shift();
  return [...dupArr, firstElem];
}

function makeArrayOf4Sides(command) {
  let arrayOf4Sides = [];
  const target = adjoined[command];
  for(let oneside in target) {
    arrayOf4Sides.push(target[oneside]);
  }
  return arrayOf4Sides;
}

function rot2DarrayClockwise() {
  // 2차원배열을 90도 시계방향 회전 함수
}

function rotAdjoinedU(u) { // U의 인접 4면들을 돌려주는 함수
  let arrayOf4Sides = makeArrayOf4Sides(u);
  let result = rotL(arrayOf4Sides);
  [ adjoined[u].top, adjoined[u].left, adjoined[u].bottom, adjoined[u].right ] 
  = [ result[0], result[1], result[2], result[3] ];
}
