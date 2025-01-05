function maxArea(heights) {
  let res = 0;

  let l = 0;
  let r = heights.length - 1;
  while (l < r) {
    let min = Math.min(heights[l], heights[r]);
    let width = r - l;
    res = Math.max(min * width, res);
    if (heights[l] <= heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}
