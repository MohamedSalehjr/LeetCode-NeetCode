function levelOrder(root){
    if(!root){
        return []
    }

    let res = []
    let queue = []

    queue.push(root)

    while (queue.length > 0){
        let level = []


        for(let i = queue.length; i > 0; i++){
            let curr = queue.shift();

            level.push(curr.val)
            if(curr.left){
                queue.push(curr.right)
            }
            if(curr.right){
                queue.push(curr.right)
            }
            }
            if(level.length > 0){
            res.push(level)
        }
    }

    return res;
}