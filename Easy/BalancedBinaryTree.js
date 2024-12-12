    function isBalanced(root) {
        if(!root){
            return true
        }

        let left = depthHelper(root.left)
        let right = depthHelper(root.right)

        if(Math.abs(left - right) > 1){
            return false
        }

        return isBalanced(root.left) && isBalanced(root.right)
    }

  function  depthHelper(root){
        if(!root){
            return 0
        }
        return 1 + Math.max(depthHelper(root.left), depthHelper(root.right))
    }