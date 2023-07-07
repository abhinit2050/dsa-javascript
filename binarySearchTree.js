 
    class Node{
        constructor(val){
            
            this.value = val;
            this.left=null;
            this.right=null;
        }
    }
    
    class  BSTree{
    
        constructor(){
            this.root=null;
        }
    
        isTreeEmpty(){
            return this.root===null
        }
    
        makeTree(val){
    
            let newNode = new Node(val);
            
            if(this.root === null){
                this.root = newNode;    
            } else {
                this.insertNode(this.root, newNode)
            }
        }
    
        insertNode(root, newNode){
            
            if(root.value>newNode.value){
                if(root.left === null){
                    root.left = newNode;
                } else{
                    this.insertNode(root.left, newNode)
                }
            } else if(root.value<newNode.value){
                if(root.right === null){
                    root.right = newNode;
                } else{
                    this.insertNode(root.right, newNode)
                }
            }
        }

        removeData(value){
            this.root = this.deleteNode(this.root, value);

        }

        deleteNode(root, value){
                if(root === null){
                    return null
                } else if(root.value>value){
                    root.left = this.deleteNode(root.left, value)
                } else if(root.value<value){
                    root.right = this.deleteNode(root.right, value)
                } else if(!root.left && !root.right){
                    return null;
                } else if(!root.left){
                    return root.right
                } else if(!root.right){
                    return root.left
                }
                root.value = this.minValue(root.right);
                root.right = this.deleteNode(root.right, root.value)
        }
        
        searchTree(root, val){
            if(root === null){
                return false;
            }else if(root.value === val){
                return true;
            } else if(root.value>val){
                return this.searchTree(root.left, val)
            } else if(root.value<val){
                return this.searchTree(root.right, val)
            }
        }

        minValue(root){
            if(!root.left){
                return root.value
            } else {
                return this.minValue(root.left)
            }
        }

        maxValue(root){
            if(!root.right){
                return root.value
            } else {
                return this.maxValue(root.right)
            }
        }
        
    }
    
    let bst = new BSTree()
    bst.isTreeEmpty();
    
    bst.makeTree(20);
    bst.makeTree(30);
    bst.makeTree(7);
    bst.makeTree(99);
    bst.makeTree(25);

    console.log(bst.root);
   bst.removeData(99);
   console.log(bst.root);
    

export default BSTree;