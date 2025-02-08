function isAnagram(s, t) {
  let sMap = new Map();
  let tMap = new Map();

  for (let c of s) {
    if (sMap.has(c)) {
      sMap.set(c, sMap.get(c) + 1);
    } else {
      sMap.set(c, 1);
    }
  }

  for (let c of t) {
    if (tMap.has(c)) {
      tMap.set(c, tMap.get(c) + 1);
    } else {
      tMap.set(c, 1);
    }
  }
  if (tMap.size !== sMap.size) {
    return false;
  }
  for (let [key, value] of sMap) {
    if (tMap.has(key) && value === tMap.get(key)) {
    } else {
      return false;
    }
  }

  return true;
}

function isAnagram2(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
