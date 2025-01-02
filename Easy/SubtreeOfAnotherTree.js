function isSubtree(root, subRoot) {
  if (!root && subRoot) {
    return false;
  }

  if (root && !subRoot) {
    return false;
  }

  if (this.isSameTree(root, subRoot)) {
    return true;
  }

  return (
    this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
  );
}

function isSameTree(root, subRoot) {
  if (!root && !subRoot) {
    return true;
  }

  if (root && subRoot && root.val === subRoot.val) {
    return (
      this.isSameTree(root.left, subRoot.left) &&
      this.isSameTree(root.right, subRoot.right)
    );
  } else {
    return false;
  }
}
