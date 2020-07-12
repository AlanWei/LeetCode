/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  var m = board.length;
  if (m < 0) {
    return [];
  }
  var n = board[0].length;
  var newBoard = [];
  for (var i = 0; i < m + 2; i++) {
    newBoard.push(new Array(n + 2).fill(0));
  }

  for (var i = 1; i < m + 1; i++) {
    for (var j = 1; j < n + 1; j++) {
      newBoard[i][j] = board[i - 1][j - 1];
    }
  }

  for (var i = 1; i < m + 1; i++) {
    for (var j = 1; j < n + 1; j++) {
      var lives =
        newBoard[i - 1][j - 1] +
        newBoard[i - 1][j] +
        newBoard[i - 1][j + 1] +
        newBoard[i][j - 1] +
        newBoard[i][j + 1] +
        newBoard[i + 1][j - 1] +
        newBoard[i + 1][j] +
        newBoard[i + 1][j + 1];
      if (newBoard[i][j] === 1) {
        if (lives === 2 || lives === 3) {
          board[i - 1][j - 1] = 1;
        } else {
          board[i - 1][j - 1] = 0;
        }
      } else {
        if (lives === 3) {
          board[i - 1][j - 1] = 1;
        } else {
          board[i - 1][j - 1] = 0;
        }
      }
    }
  }

  return board;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
