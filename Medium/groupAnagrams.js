

let strs = ["act", "pots", "tops", "cat", "stop", "hat"]

function groupAnagrams(str) {

  let strMap = new Map();


  for (let s of str) {
    let charArr = new Array(26).fill(0)

    for (let c of s) {
      charArr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    const key = charArr.join(",")

    if (!strMap.has(key)) {
      strMap.set(key, [])
    }
    strMap.get(key).push(s);
  }
  return Array.from(strMap.values())


}

console.log(groupAnagrams(strs))
