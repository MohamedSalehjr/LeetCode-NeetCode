function hasDuplicate(nums) {
  let numsSet = new Set();

  for (let n of nums) {
    if (numsSet.has(n)) {
      return true;
    } else {
      numsSet.add(n);
    }
  }

  return false;
}
