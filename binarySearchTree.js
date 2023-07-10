 
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


        deleteNode(root, val){

            //deleteNode function will be called recursively till you can make the node value null and then rearrange the tree

                if(root === null){
                    return null
                } else if(root.value>val){
                    root.left = this.deleteNode(root.left, val)       //keep traversing the left side till you find the desired node
                } else if(root.value<val){  
                    root.right = this.deleteNode(root.right, val)      //keep traversing the right side till you find the desired node
                } 
                //at this point, we have found out the node to be deleted. Now we will check for the node's children
                else if(!root.left && !root.right){
                    return null;        //no children => delete the node by making it null. No rearrangements required
                } else if(!root.left){
                    return root.right   //only one child => this return statement is actually storing the child
                                        // which will be used later for rearrangement of binary tree post node deletion
                } else if(!root.right){
                    return root.left    //same comment as above
                } else{
                    
                    //final case where the node has two children
                
                    root.value = this.minValue(root.right);     //save the value of the min value node on right which will replace the deleted node 
                                                                
                    root.right = this.deleteNode(root.right, root.value)
                }

                return root;
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
    
    bst.makeTree(23);
    bst.makeTree(10);
    bst.makeTree(50);
    bst.makeTree(5);
    bst.makeTree(12);
    bst.makeTree(45);
    bst.makeTree(55);
    bst.makeTree(52);
    bst.makeTree(27);
    
    // console.log(bst.root);
   bst.removeData(50);
   console.log(bst.root);
    

export default BSTree;