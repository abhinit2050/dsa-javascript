class LinkedList {

    constructor(data){
        this.head = {
            value:data,
            next:null
        }

        this.tail = this.head;
        this.size = 1;
    }

    appendNode(nodeData){
        
        let newNode = {
            value:nodeData,
            next:null
        }

        this.tail.next=newNode;
        this.tail = newNode;
        this.size++; 
    }

    deleteNode(index){
        let currentNode = this.head;
        let count = 1;

        if(index === 1){
            this.head = this.head.next
            return 
        }

        while(count<index){
            currentNode = currentNode.next;
            count++;
        }

        currentNode.next = currentNode.next.next
        return
    }

    insertNode(index, value){
        let count = 1;
        let currentNode = this.head;

        while(count<index){
            currentNode = currentNode.next;
            count++;
        }

        let temp = currentNode.next;
        currentNode.next = {
            value:value,
            next:temp
        }

    }

    printList(){
        console.log(this);
    }

    returnListSize(){
        console.log(this.size);
        return this.size;
    }

    traversing(){
        let count=1;
        let currentNode = this.head;

        while(count<this.size){
            currentNode = currentNode.next;
            count++
            console.log(currentNode!=null?currentNode.value:null);
        }
    }
}


let list = new LinkedList();

list.appendNode(125);
list.appendNode(251);
list.appendNode(222);
list.appendNode(757);
list.appendNode(847);

list.deleteNode(1);
list.insertNode(3,345)
list.traversing();
