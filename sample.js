import Queue from "./queue.js";
import Stack from "./stack.js";

const queue = new Queue(5);
const st = new Stack(8);


const arr = ["JL Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai", "Rajiv Gandhi",
             "VP Singh", "Chandrashekhar","PV Narsimha Rao","H D Devegowda", "I K Gujral", "Atal Bihari Vajpayee",
             "Manmohan Singh", "Narendra Modi"]

//arr.map(ele => queue.enqueue(ele));

arr.forEach((ele)=>{
    st.push(ele)
})


