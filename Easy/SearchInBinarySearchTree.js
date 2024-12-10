

var searchBST = function(root, val) {
  let curr = root

  while (curr) {
    if (curr.val == val) {
      return curr
    } else if (val < curr.val) {
      curr = curr.left
    } else {
      curr = curr.right
    }
  }

  return null
};


