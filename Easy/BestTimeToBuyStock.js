function maxProfit(prices) {
  let l = 0;
  let r = 1;
  let res = 0;

  while (l < prices.length) {
    if (prices[l] < prices[r]) {
      res = Math.max(res, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r++;
  }
  return res;
}
