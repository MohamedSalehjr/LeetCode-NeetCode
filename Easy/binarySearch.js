let nums = [-1, 0, 2, 4, 6, 8]
let target = 3


// input = sorted int array and target value
// output = index of target if found otherwise return -1 
//
//
// set a left pointer to start of array
// set a right pointer to the end of array
//
// while the pointers dont overlap 
// 
// add the two pointer values and divide by two 
// check the mid value 
// if its smaller than target then move the left pointer up
// else if its bigger then move right pointer down 
// else return the index as we've found the value 
//return -1 if we exit loop without finding the value

function search(nums, target) {

  let l = 0
  let r = nums.length - 1


  while (l <= r) {
    let mid = Math.floor((l + r) / 2)

    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      return mid;
    }
  }

  return -1;
}


console.log(search(nums, target))
