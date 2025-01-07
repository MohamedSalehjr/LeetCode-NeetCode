function dailyTemperatures(temperatures) {
  let res = [];

  for (let i = 0; i < temperatures.length; i++) {
    let j = i + 1;
    let count = 0;
    let hit = false;

    while (j < temperatures.length) {
      if (temperatures[j] > temperatures[i]) {
        count++;
        res.push(count);
        hit = true;
        break;
      } else {
        count++;
      }
      j++;
    }
    if (hit === false) {
      res.push(0);
    }
  }
  return res;
}
