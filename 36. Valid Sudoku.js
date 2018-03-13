/**
 * @param {character[][]} board
 * @return {boolean}
 */

const nums = [".", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function isUnique(arr) {
  const map = {};
  for(let i = 0; i < arr.length; i++) {
    if (nums.indexOf(arr[i]) === -1) {
      return false;
    }
    if (arr[i] !== "." && map[arr[i]] !== undefined) {
      return false;
    }
    map[arr[i]] = 0;
  }
  return true;
}

var isValidSudoku = function(board) {
  // rows
  for (let i = 0; i < board.length; i++) {
    if (!isUnique(board[i])) {
      return false;
    }
  }
  // cols
  for (let i = 0; i < board.length; i++) {
    const temp = [];
    for (let j = 0; j < board[0].length; j++) {
      temp.push(board[j][i]);
    }
    if (!isUnique(temp)) {
      return false;
    }
  }
  // cubes
  const third = board.length / 3;
  for (let i = 0; i < third; i++) {
    for (let j = 0; j < third; j++) {
      const temp = [];
      for (let k = 0; k < third; k++) {
        for (let l = 0; l < third; l++) {
          temp.push(board[3 * i + k][3 * j + l]);
        }
      }
      if (!isUnique(temp)) {
        return false;
      }
    }
  }
  return true;
};