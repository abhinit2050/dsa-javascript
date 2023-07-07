function arrayLengthCalculator(str){
    
   console.log(str);

   if (str.length === 1){
    let strNew2 = str[0].split('');
     console.log(strNew2);

    } else if(str.length>1){
        
        for(let i=0;i<str.length;i++){
           
            let strNew = str[i].split('');
           arrayLengthCalculator(strNew);
         
        }
    } 

}

const arr = ["Apple", "Ball", "Cat", "Dog"]
const arr2 = ["Abcd"]

arrayLengthCalculator(arr2);