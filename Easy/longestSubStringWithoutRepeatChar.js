let s = "abcabcbb"

function lengthOfLongestSubstring(s) {
  let res = 0;
  let arr = s.split("");
  let l = 0


  for (let i = 0; i < arr.length; i++) {
    let charSet = new Set()
    charSet.add(arr[i])
    let l = i + 1
    while (l < arr.length) {
      if (charSet.has(arr[l])) {
        break;
      } else {
        charSet.add(arr[l])
        l++;
      }
    }

    res = Math.max(res, charSet.size)
  }

  return res;
}


console.log(lengthOfLongestSubstring(s))
