class Stack{

    constructor(size){
        this.maxSize = size;
        this.items = [];
    }

    push(val){
        if(this.items.length>=this.maxSize){
            console.log("Error inserting value. Stack full!")
        } else {
            this.items.push(val);
        }
        
    }

    pop(){
        if(this.items.length === 0){
            console.log("Stack empty");
        } else{
            this.items.pop();    
        }
        
    }

    isEmpty(){
        if(this.items.length === 0){
           return true;
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1];
        } else{
            console.log("Stack is empty");
        }
    }

    printStack(){
        return this.items
    }
}

export default Stack;

// let st = new Stack(8);

// st.push(1947);
// st.push(1964);
// st.push(1966);
// st.push(1977);
// st.push(1980);
// st.push(1984);
// st.push(1989);
// st.push(1990);
// st.push(1991);
// st.push(1996);
// st.push(1998);
// st.push(2004);
// st.push(2014);

// let result = st.printStack();
// console.log(result);

// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();


// result = st.printStack()
// console.log(result);
// console.log(st.peek());