/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function search(board, row, col, arr) {
  const rows = board.length;
  const cols = board[0].length;
  if (arr.length === 0) {
    return true;
  }
  if (row >= rows || col >= cols || row < 0 || col < 0) {
    return false;
  }
  if (board[row][col] !== arr[0]) {
    return false;
  }
  const temp = board[row][col];
  board[row][col] = 0;
  const ans = search(board, row - 1, col, arr.slice(1)) ||
    search(board, row, col + 1, arr.slice(1)) ||
    search(board, row + 1, col, arr.slice(1)) ||
    search(board, row, col - 1, arr.slice(1));
  board[row][col] = temp;
  return ans;
}

var exist = function(board, word) {
  const chars = word.split("");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (search(board, i, j, chars)) {
        return true;
      }
    }
  }

  return false;
};