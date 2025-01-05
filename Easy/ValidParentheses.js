function isValid(s) {
  if (s.length <= 1) {
    return false;
  }
  let brackets = new Map([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);

  let stack = [];

  for (let n of s) {
    if (brackets.has(n)) {
      if (brackets.get(n) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(n);
    }
  }

  if (stack.length >= 1) {
    return false;
  } else {
    return true;
  }
}
