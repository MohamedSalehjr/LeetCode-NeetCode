let s1 = "abc";
let s2 = "lecabee";
let i = 1;
let piece = s2.slice(i, i + 3);

console.log(piece);

function permutation(s1, s2) {
  s1 = s1.split("").sort().join("");

  for (let i = 0; i < s2.length; i++) {
    let piece = s2.slice(i, i + s1.length);
    let perm = piece.split("").sort().join("");
    if (perm === s1) {
      return true;
    }
  }
  return false;
}
