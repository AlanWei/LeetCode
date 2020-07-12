/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

function helper(str1, str2) {
  if (str1 === str2) {
    return false;
  }
  let s = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      if (s) {
        return false;
      }
      s = true;
    }
  }

  return true;
}

function isValid(word, wordList) {
  var valid = [];
  for (var i = 0; i < wordList.length; i++) {
    if (helper(word, wordList[i])) {
      valid.push(wordList[i]);
    }
  }

  return valid;
}

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele !== value;
  });
}

var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) {
    return 0;
  }
  var next = isValid(beginWord, wordList);
  var depth = 1;
  while (next.length > 0) {
    depth++;
    for (var i = 0; i < next.length; i++) {
      if (next[i] === endWord) {
        return depth;
      }
      wordList = arrayRemove(wordList, next[i]);
    }
    var newNext = [];
    for (var i = 0; i < next.length; i++) {
      newNext = newNext.concat(isValid(next[i], wordList));
    }

    next = newNext;
  }

  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
console.log(ladderLength("hot", "dog", [("hot", "dog")]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "tog", "cog"]));
