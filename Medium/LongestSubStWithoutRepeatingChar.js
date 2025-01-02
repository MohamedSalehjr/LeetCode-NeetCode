let s = "zzzz";

function lengthOfLongestSubstring(s) {
  if (s.length === 0) {
    return 0;
  } else if (s.length === 1) {
    return 1;
  }

  let l = 0;
  let longest = 0;

  while (l < s.length) {
    let streak = 0;
    let stringSet = new Set();

    while (!stringSet.has(s[l]) && l < s.length) {
      stringSet.add(s[l]);
      streak++;
      l++;
    }
    console.log(streak);
    longest = Math.max(streak, longest);
  }

  return longest;
}

console.log(lengthOfLongestSubstring(s));
