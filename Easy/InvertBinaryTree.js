function invertBinaryTree() {
  if (root === null) {
    return null;
  }

  const node = new TreeNode(root.val);

  node.right = this.invertBinaryTree(root.left);
  node.left = this.invertBinaryTree(root.right);

  return node;
}
