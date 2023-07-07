class Queue{
    constructor(size){
        this.maxSize = size;
        this.items =[];
        this.front = 0;
        this.rear = 0;
    }

        enqueue(val){
            console.log(this.items.length);

            if(this.items.length>=this.maxSize){
                console.log("Error: Queue is full. "+val+" not entered in queue.");
                return this.printQueue();
            } else {
                this.items.push(val);
            }
            
        }  
     
        dequeue(){
            this.items.splice(0,1);
            this.rear = this.items.length-1
        }

       

        printQueue(){
            return this.items;
        }

     
}

// var q = new Queue(4);
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(25);
// q.enqueue(77);
// q.enqueue(102);
// q.enqueue(114);

// var result = (q.printQueue());
// console.log(result);

// q.dequeue();
// q.dequeue();


// console.log(result);
// console.log(q.rear);
// console.log(q.items.length);

export default Queue;