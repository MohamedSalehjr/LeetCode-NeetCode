let array = [2, 20, 4, 10, 3, 4, 5];
let sorted = array.sort((a, b) => a - b);

console.log(sorted);
let nums = [1, 2, 2, 3, 3, 3];
let k = 2;

function topK(nums, k) {
  let res = [];
  let numMap = new Map();
  for (let n of nums) {
    if (numMap.has(n)) {
      numMap.set(n, numMap.get(n) + 1);
    } else {
      numMap.set(n, 1);
    }
  }

  const mapSort = new Map([...numMap.entries()].sort((a, b) => b[1] - a[1]));
  let i = 0;
  for (let n of mapSort) {
    if (i >= k) break;
    res.push(n[0]);
    i++;
  }

  return res;
}

console.log(topK(nums, k));
