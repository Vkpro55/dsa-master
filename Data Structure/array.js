class DynamicArray {
    constructor() {
        this.arr = [];
    }

    // Insert an element at the end
    push(value) {
        this.arr.push(value);
    }

    // Remove the last element
    pop() {
        if (this.arr.length === 0) return undefined;
        return this.arr.pop();
    }

    // Get an element at a given index
    get(index) {
        if (index < 0 || index >= this.arr.length) return undefined;
        return this.arr[index];
    }

    // Set an element at a given index
    set(index, value) {
        if (index < 0 || index >= this.arr.length) return false;
        this.arr[index] = value;
        return true;
    }

    // Delete an element at a given index
    delete(index) {
        if (index < 0 || index >= this.arr.length) return false;
        this.arr.splice(index, 1);
        return true;
    }

    display() {
        console.log(this.arr);
    }
}

module.exports = DynamicArray;

/**
 * Time Complexity:
 *  - push(): O(1)
 *  - pop(): O(1)
 *  - get(): O(1)
 *  - set(): O(1)
 *  - delete(): O(n) (because of shifting elements)
 * 
 * Space Complexity: O(n)
 */
