function sameTree(p, q) {

  if (p && !q || q && !p) {
    return false
  }
  if (!p && !q) {
    return true
  }

  let queueP = []
  let queueQ = []

  queueP.push(p)
  queueQ.push(q)

  while (queueP.length > 0 && queueQ.length > 0) {
    let currentNodeP = queueP.shift()
    let currentNodeQ = queueQ.shift()

    if (currentNodeP.val != currentNodeQ.val) {
      return false
    }
    if (currentNodeP.left && currentNodeQ.left) {
      queueP.push(currentNodeP.left)
      queueQ.push(currentNodeQ.left)
    } else if ((!currentNodeP.left && currentNodeQ.left) || (!currentNodeQ.left && currentNodeP.left)) {
      return false
    }

    if (currentNodeP.right && currentNodeQ.right) {
      queueP.push(currentNodeP.right)
      queueQ.push(currentNodeQ.right)
    } else if ((!currentNodeP.right && currentNodeQ.right) || (!currentNodeQ.right && currentNodeP.right)) {
      return false
    }
  }

  return true
}
