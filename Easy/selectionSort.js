
let nums = [3, 4, 2, 7, 8, 1, 5]



function selectionSort(nums) {
  let arr = nums

  for (let i = 0; i < arr.length; i++) {
    let smallest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j
      }

    }
    let temp = arr[smallest]
    arr[smallest] = arr[i]
    arr[i] = temp
  }


  return arr;
}


console.log(selectionSort(nums))
