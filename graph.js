console.log("Graph Data Structure");
class Graph{
    constructor(){
       this.data = {}
    }

    addVertex(vert){
        if(this.data[vert]!== null){
            this.data[vert] = [];
        }
    }

    addEdge(v1, v2){
        if(!this.data[v1]){
            this.data[v1] = v2;
        } else {
            this.data[v1].push(v2);
        }
        
        if(!this.data[v2]){
            this.data[v2] = v1;
        } else {
            this.data[v2].push(v1);
        }
        
    }

}

const graph1 = new Graph();
graph1.addVertex('A');
graph1.addVertex('B');
graph1.addVertex('C');
graph1.addVertex('D');

graph1.addEdge('A', 'C');
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'D')
graph1.addEdge('C', 'B');



console.log(graph1);