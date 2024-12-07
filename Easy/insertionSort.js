function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Remove element at index i and insert it at index j
          // array.splice(i,1)[0] removes element at i and returns it in array, so [0] gets the element
          // array.splice(j,0,element) inserts that element at position j
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}
