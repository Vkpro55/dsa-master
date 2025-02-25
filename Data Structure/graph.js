// Graph Adjacency list
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1); // For an undirected graph
    }

    display() {
        for (let [vertex, edges] of this.adjList) {
            console.log(vertex, ":", edges);
        }
    }
}

module.exports = Graph;

/**
 * Time Complexity:
 *  - addVertex(): O(1)
 *  - addEdge(): O(1)
 * 
 * Space Complexity: O(V + E)
 */
