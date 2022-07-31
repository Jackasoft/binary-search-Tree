// binary search tree

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }

    size(){
        return console.log(`nodes: ${this.count}`)
    }

    insert(value){
        this.count++

        let newNode = new Node(value)

        const searchTree = node =>{
            //if the value < node.value go, left
            if(value < node.value){
                 //if no left child,append new node
                 if(!node.left){
                    node.left = newNode
                //if left child,look left again
                }else{
                    searchTree(node.left)
                }
            }

            //if the value > node.value go, right
            else if(value > node.value){
                //if no right child,append new node
                if(!node.right){
                    node.right = newNode
                //if right child,look right again
                }else{
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }

    min(){
        let currentNode = this.root

        //continue trevarsing left until no more children
        while(currentNode.left){
            currentNode = currentNode.left
        }

        return console.log(`minimum: ${currentNode.value}`)
    }

    max(){
        let currentNode = this.root

        //continue trevarsing right until no more children
        while(currentNode.right){
            currentNode = currentNode.right
        }

        return console.log(`maximum: ${currentNode.value}`)
    }

    contains(value){
        let currentNode = this.root

        while(currentNode){
            if(value === currentNode.value){
                return true
            }
            
            if(value < currentNode.value){
               currentNode = currentNode.left
            }else{
                currentNode = currentNode.right
            }
        }
        return false
    }

    //depth first search -- branch by branch

    //in-order
    //left, root ,right
    //2,3,12,15,28,36,39
    dfsInOrder(){
        let result = []

        const travarse = node =>{
            //if left child exist,go left again
            if(node.left) travarse(node.left)
            //capture root node value
            result.push(node.left)
            //if right child exist,go right again
            if(node.right) travarse(node.right)
        }
        travarse(this.root)
        return console.log(result);
    }

    //pre-order
    //root, left, right
    //15,3,2,12,36,28,39
    dfsPreOrder(){
        let result = []

        const travarse = node =>{
             //capture root node value
             result.push(node.left)
            //if left child exist,go left again
            if(node.left) travarse(node.left)
            //if right child exist,go right again
            if(node.right) travarse(node.right)
        }
        travarse(this.root)
       
        return console.log(result);
    }

    //post-oder
    //left, right, root
    //2,12,3,28,39,36,15
    dfsPostOrder(){
        let result = []

        const travarse = node =>{
            //if left child exist,go left again
            if(node.left) travarse(node.left)
            //if right child exist,go right again
            if(node.right) travarse(node.right)
             //capture root node value
             result.push(node.left)
        }
        travarse(this.root)
        
        return console.log(result);
    }



    //breath first search -- level by level
    //use queue
    //15,3,36,2,12,28,39
    bfs(){
        let result = []

        let queue = []
        queue.push(this.root)

        while(queue.length){
            let currentNode = queue.shift()

            result.push(currentNode.value)

            if(currentNode.left){
                queue.push(currentNode.left)
            }

            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return console.log(result)
    }
}


const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
bst.insert(32)
bst.insert(49)


bst.size()
bst.min()
bst.max()
console.log(`is contained:`, bst.contains(3000000))

//in-order =>2,3,12,15,28,36,39
bst.dfsInOrder()
//pre-order =>15,3,2,12,36,28,39
bst.dfsPreOrder()
//post-order =>2,12,3,28,39,36,15
bst.dfsPostOrder()

bst.bfs()