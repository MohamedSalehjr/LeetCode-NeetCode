function twoSum(nums, target) {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    if (numsMap.has(res)) {
      return [i, numsMap.get(res)];
    } else {
      numsMap.set(nums[i], i);
    }
  }
  return [];
}
