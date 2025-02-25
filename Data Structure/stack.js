class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.stack.length === 0) return undefined;
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    display() {
        console.log(this.stack);
    }
}

module.exports = Stack;

/**
 * Time Complexity:
 *  - push(): O(1)
 *  - pop(): O(1)
 *  - peek(): O(1)
 * 
 * Space Complexity: O(n)
 */
