class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift(); // O(n) due to shifting
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    display() {
        console.log(this.queue);
    }
}
module.exports = Queue;

/**
 * Time Complexity:
 *  - enqueue(): O(1)
 *  - dequeue(): O(n) (due to shifting elements)
 *  - peek(): O(1)
 * 
 * Space Complexity: O(n)
 */
