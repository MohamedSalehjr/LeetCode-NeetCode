let s = "tab a cat";

//filter out any other char
// join the sctring into one coehisive string
// use two pointers to check if the char are equal to each other
// return true at end if false condition isnt met
// exceptional cases theres is only one character return false

function isPalindrome(s) {
  let arr = [];

  for (let c of s) {
    if (isChar(c)) {
      arr.push(c);
    }
  }

  let joinedS = arr.join("");
  joinedS = joinedS.toLowerCase();
  let l = 0;
  let r = joinedS.length - 1;

  while (l < r) {
    if (joinedS[l] !== joinedS[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

function isChar(c) {
  return (
    (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")
  );
}

console.log(isPalindrome(s));
