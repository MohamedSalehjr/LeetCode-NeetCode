function diameterOfBinaryTree(root) {
  let res = [0];
  dfs(root, res);
  return res[0];
}

function dfs(root, res) {
  if (!root) {
    return 0;
  }

  let left = dfs(root.left, res);
  let right = dfs(root.right, res);

  res[0] = Math.max(res[0], left + right);
  return 1 + Math.max(left, right);
}
