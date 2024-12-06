
// first Im thinking of using sets to avoid duplicates
// and for the O(n) time
// my first thought was to use a sorting algorithm first
// but that would be minimum O(logn) time complexity
// using a set 
// I have a variable that keeps track of the longest sequence so far
// then I will have a set 
// loop through each element in the array
// have a local variable called streak keeping track of the longest current sequence
// if the current number + 1 exists in the set increment the streak
// check if the current streak is bigger than the longest and update accordingly
// otherwise reset the streak to 0
// returrn the longest streak



let nums = [2, 20, 4, 10, 3, 4, 5]


function longestConsecutive(array) {

  let longestSeq = 0

  let arrSet = new Set(array)

  for (let n of arrSet) {
    let streak = 1;

    while (arrSet.has(n + 1)) {
      streak++
    }

    longestSeq = Math.max(longestSeq, streak)
  }

  return longestSeq

}



console.log(longestConsecutive(nums))
