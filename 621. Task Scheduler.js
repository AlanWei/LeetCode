/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }
  var map = {};
  var idle = 0;

  for (var i = 0; i < tasks.length; i++) {
    if (map[tasks[i]] === undefined) {
      map[tasks[i]] = 1;
    } else {
      map[tasks[i]] += 1;
    }
  }

  var keys = Object.keys(map);

  var temp = [];

  for (var i = 0; i < tasks.length; i++) {
    var biggest = 0;
    var biggestLetter = map[keys[0]];
    for (var j = 0; j < keys.length; j++) {
      if (temp.indexOf(keys[j]) === -1) {
        if (map[keys[j]] > biggest) {
          biggest = map[keys[j]];
          biggestLetter = keys[j];
        }
      }
    }
    if (biggest === 0) {
      i--;
      idle++;
      if (temp.length === n) {
        temp.shift();
      }
      temp.push("idle");
    } else {
      if (temp.length === n) {
        temp.shift();
      }
      temp.push(biggestLetter);
      map[biggestLetter] -= 1;
    }
  }

  return tasks.length + idle;
};

var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }
  var idle = 0;

  var map = tasks.reduce((acc, task) => {
    acc[task] = acc[task] + 1 || 1;
    return acc;
  }, {});

  var temp = [];

  for (var i = 0; i < tasks.length; i++) {
    var sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
    var biggestLetter = "";
    for (var j = 0; j < sorted.length; j++) {
      if (temp.indexOf(sorted[j][0]) === -1 && sorted[j][1] > 0) {
        biggestLetter = sorted[j][0];
        break;
      }
    }
    if (biggestLetter === "") {
      i--;
      idle++;
      if (temp.length === n) {
        temp.shift();
      }
      temp.push("idle");
    } else {
      if (temp.length === n) {
        temp.shift();
      }
      temp.push(biggestLetter);
      map[biggestLetter] -= 1;
    }
  }

  return tasks.length + idle;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 50));
console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);
console.log(
  leastInterval(["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"], 4)
);
// console.log(
//   leastInterval(
//     [
//       "A",
//       "A",
//       "B",
//       "B",
//       "C",
//       "C",
//       "D",
//       "D",
//       "E",
//       "E",
//       "F",
//       "F",
//       "G",
//       "G",
//       "H",
//       "H",
//       "I",
//       "I",
//       "J",
//       "J",
//       "K",
//       "K",
//       "L",
//       "L",
//       "M",
//       "M",
//       "N",
//       "N",
//       "O",
//       "O",
//       "P",
//       "P",
//       "Q",
//       "Q",
//       "R",
//       "R",
//       "S",
//       "S",
//       "T",
//       "T",
//       "U",
//       "U",
//       "V",
//       "V",
//       "W",
//       "W",
//       "X",
//       "X",
//       "Y",
//       "Y",
//       "Z",
//       "Z",
//     ],
//     2
//   )
// );
