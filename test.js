let numbers = [1, 2, 3, 4],
  target = 3;

function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  let res = [];
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    console.log(sum);
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return res;
}

console.log(twoSum(numbers, target));

console.log(Math.ceil(10 / 9));
