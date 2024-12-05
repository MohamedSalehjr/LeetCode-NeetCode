

let nums = [2, -3, 4, -2, 2, 1, -1, 4]

function maximumSubArray(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = currSum + nums[i]
    currSum = Math.max(temp, nums[i]);
    maxSum = Math.max(currSum, maxSum)
  }

  return maxSum
}


console.log(maximumSubArray(
  nums
))
