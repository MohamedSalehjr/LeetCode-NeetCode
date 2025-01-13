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

function lengthOfLongestSubstringTwp(s) {
  if (!s) {
    return 0;
  }
  let res = 1;
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i + 1;
    let subSet = new Set();
    let streak = 1;
    subSet.add(s[i]);

    while (l < s.length) {
      if (!subSet.has(s[l])) {
        streak++;
        subSet.add(s[l]);
        l++;
      } else {
        break;
      }
    }
    res = Math.max(res, streak);
  }
  return res;
}
