function topKFrequent(nums, k) {
  let res = [];
  let numMap = new Map();

  for (let n of nums) {
    if (numMap.has(n)) {
      numMap.set(n, numMap.get(n) + 1);
    } else {
      numMap.set(n, 1);
    }
  }

  let sortedMap = new Map([...numMap.entries()].sort((a, b) => b[1] - a[1]));

  let i = 0;

  for (let n of sortedMap) {
    if (i >= k) break;
    res.push(n[0]);
    i++;
  }
  return res;
}
