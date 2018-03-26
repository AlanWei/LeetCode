/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function checkTop(board, i, j) {
  if (board[i - 1] !== undefined) {
    if (board[i - 1][j] === 'O') {
      return checkTop(board, i - 1, j);
    }
    return true;
  }
  return false;
}

function checkBottom(board, i, j) {
  if (board[i + 1] !== undefined) {
    if (board[i + 1][j] === 'O') {
      return checkBottom(board, i + 1, j);
    }
    return true;
  }
  return false;
}

function checkLeft(board, i, j) {
  if (board[i][j - 1] === undefined) {
    return false;
  }
  if (board[i][j - 1] === 'O') {
    return checkLeft(board, i, j - 1);
  }
  return true;
}

function checkRight(board, i, j) {
  if (board[i][j + 1] === undefined) {
    return false;
  }
  if (board[i][j + 1] === 'O') {
    return checkRight(board, i, j + 1);
  }
  return true;
}

function checkTopY(board, i, j) {
  if (board[i - 1][j] === 'X') {
    return true;
  }
  if (board[i - 1][j] === 'O') {
    return false;
  }
  if (board[i - 1][j] === 'Y') {
    return checkTopY(board, i - 1, j);
  }
}

function checkBottomY(board, i, j) {
  if (board[i + 1][j] === 'X') {
    return true;
  }
  if (board[i + 1][j] === 'O') {
    return false;
  }
  if (board[i + 1][j] === 'Y') {
    return checkBottomY(board, i + 1, j);
  }
}

function checkLeftY(board, i, j) {
  if (board[i][j - 1] === 'X') {
    return true;
  }
  if (board[i][j - 1] === 'O') {
    return false;
  }
  if (board[i][j - 1] === 'Y') {
    return checkLeftY(board, i, j - 1);
  }
}

function checkRightY(board, i, j) {
  if (board[i][j + 1] === 'X') {
    return true;
  }
  if (board[i][j + 1] === 'O') {
    return false;
  }
  if (board[i][j + 1] === 'Y') {
    return checkRightY(board, i, j + 1);
  }
}

var solve = function(board) {
  let first = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        if (checkTop(board, i, j) && checkBottom(board, i, j) && checkLeft(board, i, j) && checkRight(board, i, j)) {
          board[i][j] = 'Y';
          first.push({
            i,
            j
          });
        }
      }
    }
  }
  let temp = true;
  while (temp) {
    temp = false;
    for (let k = 0; k < first.length; k++) {
      const {i, j} = first[k];
      if (!checkTopY(board, i, j) || !checkBottomY(board, i, j) || !checkLeftY(board, i, j) || !checkRightY(board, i, j)) {
        board[i][j] = 'O';
        temp = true;
        first = first.slice(0, k).concat(first.slice(k + 1));
      } else {
        board[i][j] = 'X';
      }
    }
  }
  console.log(board);
};

solve([
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]);
solve(["O"]);
solve([
  ["O","O"],
  ["O","O"]
]);
solve([
  ["O","X","X","O","X"],
  ["X","O","O","X","O"],
  ["X","O","X","O","X"],
  ["O","X","O","O","O"],
  ["X","X","O","X","O"]
]);