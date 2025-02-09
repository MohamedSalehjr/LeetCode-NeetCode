function climbingStairs(n) {
  if (n <= 2) {
    return n;
  }

  let res = [1, 1];

  let i = 2;

  while (i <= n) {
    let temp = res[1];
    res[1] = res[0] + res[1];
    res[0] = temp;
    i++;
  }
  return res[1];
}
