function findMin(nums) {
  let min = nums[0];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);

    if (nums[mid] < min) {
      min = nums[mid];
      r = mid - 1;
    } else if (nums[mid] >= min) {
      l = mid + 1;
    }
  }

  return min;
}
