/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(str) {
  let head = 0;
  let tail = str.length - 1;
  while (head < tail) {
    if (str.charAt(head) !== str.charAt(tail)) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
}

function generate(str, start, current, ro) {
  if (start === str.length) {
    return ro.push(current.slice());
  }

  for (let i = start; i < str.length; i++) {
    const substr = str.substring(start, i + 1);
    if (isPalindrome(substr)) {
      current.push(substr);
      generate(str, i + 1, current, ro);
      current.pop();
    }
  }
}

var partition = function(s) {
  const ro = [];

  generate(s, 0, [], ro);

  return ro;
};

console.log(partition("aabdsadasd"));