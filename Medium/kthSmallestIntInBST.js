function kthSmallest(root, k) {
    let res = this.helperTraversal(root, [])
    return res[k - 1]
  }

  function helperTraversal(root, path){
    if(root !== null){
        this.helperTraversal(root.left, path)
        path.push(root.val)
        this.helperTraversal(root.right, path)
    }
    return path
  }

  