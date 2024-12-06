


let nums = [3, 4, 2, 7, 8, 1, 5]



function bubbleSort(nums) {
  let arr = nums
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr;
}


console.log(bubbleSort(nums))
