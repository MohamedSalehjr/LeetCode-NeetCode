//     function isBalanced(root) {
//         if(!root){
//             return true
//         }

//         let left = depthHelper(root.left)
//         let right = depthHelper(root.right)

//         if(Math.abs(left - right) > 1){
//             return false
//         }

//         return isBalanced(root.left) && isBalanced(root.right)
//     }

//   function  depthHelper(root){
//         if(!root){
//             return 0
//         }
//         return 1 + Math.max(depthHelper(root.left), depthHelper(root.right))
//     }

class Solution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isBalanced(root) {
    if (!root) {
      return true;
    }

    let left = this.height(root.left);
    let right = this.height(root.right);

    let currBalance = Math.abs(left - right);

    if (currBalance > 1) return false;

    return this.isBalanced(root.left) && this.isBalanced(root.right);
  }

  height(root) {
    if (!root) {
      return 0;
    }

    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }
}
