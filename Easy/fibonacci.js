// recursive fibonacci

function fib(n) {
  if (n <= 1) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}


console.log(fib(3))

//fibonacci dynamic programming way

function fibDynamic(n) {
  if (n < 2) {
    return n;
  }

  let res = [0, 1]
  let i = 2


  while (i <= n) {
    let temp = res[1]
    res[1] = res[0] + res[1]
    res[0] = temp
    i++
  }

  return res[1]
}


// 1, 1, 2, 3, 5
// - i = 2, temp = 1, res[1] = 1, res[0] = 1
// - i = 3, temp = 1, res[1] = 2, res[0] = 1
// - i = 4, temp = 2, res[1] = 3, res[0] = 2 


console.log(fibDynamic(5))
