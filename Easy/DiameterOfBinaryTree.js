   function diameterOfBinaryTree(root) {
        let res = [0]
        this.dfs(root, res)
        return res[0]
      }
  
      dfs(root, res){
          if(!root){
              return 0
          }
  
          let left = this.dfs(root.left, res)
          let right = this.dfs(root.right, res)
  
          res[0] = Math.max(res[0], left + right)
          return 1 + Math.max(left, right)
      }