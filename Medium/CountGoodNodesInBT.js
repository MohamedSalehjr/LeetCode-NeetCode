function goodNodes(root) {
  dfs(root, root.val);
}

function dfs(root, maxVal) {
  if (!root) {
    return 0;
  }

  let res = root.val >= maxVal ? 1 : 0;
  maxVal = Math.max(root.val, maxVal);
  res += dfs(root.left, maxVal);
  res += dfs(root.right, maxVal);
  return res;
}
