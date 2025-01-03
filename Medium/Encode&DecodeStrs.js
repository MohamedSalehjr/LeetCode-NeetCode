function encode(strs) {
  if (strs.length === 0) {
    return "";
  }
  let sizes = [],
    res = "";

  for (let s of strs) {
    sizes.push(s.length);
  }
  for (let sz of sizes) {
    res += sz + ",";
  }
  // let res = sizes.join(",")
  res += "#";

  for (let s of strs) {
    res += s;
  }
  return res;
}

function decode(str) {
  if (str.length === 0) return [];
  let sizes = [],
    res = [],
    i = 0;
  while (str[i] !== "#") {
    let cur = "";
    while (str[i] !== ",") {
      cur += str[i];
      i++;
    }
    sizes.push(parseInt(cur));
    i++;
  }
  i++;
  for (let sz of sizes) {
    res.push(str.slice(i, i + sz));
    i += sz;
  }
  return res;
}
