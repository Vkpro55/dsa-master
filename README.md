# DSA-Algorithms-JS

A Comprehensive Data Structures and Algorithms Library for JavaScript

## Introduction

DSA-Algorithms-JS is a JavaScript library that provides efficient implementations of sorting algorithms, searching algorithms, and graph data structures. Whether you're a beginner learning DSA or an experienced developer working on competitive programming, this package will help you write optimized and well-structured code. It is designed for:

- Sorting and Searching Algorithms
- Dynamic Array
- Linked List
- Stack
- Queue
- Heap

## Installation

- To use this library, first install it using npm:

  ```
  npm install dsa-master
  ```

- Then, require the necessary modules in your JavaScript file:

  ```
  const dsa = require('dsa-master');
  const { SearchingAlgorithm, SortingAlgorithm, DataStructure } = dsa;
  ```

## 📚 Usage

**Sorting Algorithms**

```
const arr1 = [6, 7, -1, 0, 100, 7];
SortingAlgorithm.BubbleSort(arr1);
console.log(arr1); // Output: [-1, 0, 6, 7, 7, 100]
```

This table provides the time and space complexities of common sorting algorithms.

| Algorithm          | Best Case  | Worst Case | Average Case | Space Complexity |
| ------------------ | ---------- | ---------- | ------------ | ---------------- |
| **Bubble Sort**    | O(n)       | O(n²)      | O(n²)        | O(1)             |
| **Selection Sort** | O(n²)      | O(n²)      | O(n²)        | O(1)             |
| **Insertion Sort** | O(n)       | O(n²)      | O(n²)        | O(1)             |
| **Merge Sort**     | O(n log n) | O(n log n) | O(n log n)   | O(n)             |
| **Quick Sort**     | O(n log n) | O(n²)      | O(n log n)   | O(log n)         |

**Searching Algorithms**

```
const arr2 = [-1, 0, 6, 7, 9, 100];
const index = SearchingAlgorithm.BinarySearch(arr2, 7);
console.log(index); // Output: 3
```

| Algorithm         | Best Case | Worst Case | Average Case |
| ----------------- | --------- | ---------- | ------------ |
| **Linear Search** | O(1)      | O(n)       | O(n)         |
| **Binary Search** | O(1)      | O(log n)   | O(log n)     |

**Dynamic Array**

```
const DynamicArray = DataStructure.Array;
const array = new DynamicArray();
array.push(10);
array.push(20);
array.display(); // [10, 20]
array.pop();
array.display(); // [10]
```

**Linked List**

```
const LinkedList = DataStructure.LinkedList;
const list = new LinkedList();
list.append(5);
list.append(10);
list.display(); // 5 -> 10 -> null
list.delete(5);
list.display(); // 10 -> null
```

**Stack**

```
const Stack = DataStructure.Stack;
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.display(); // [5, 10]
stack.pop();
stack.display(); // [5]
```

**Queue**

```
const Queue = DataStructure.Queue;
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.display(); // [5, 10]
queue.dequeue();
queue.display(); // [10]
```

**Heap**

```
const Heap = DataStructure.PriorityQueue;
const minHeap = new Heap((a, b) => a < b); // Min Heap
minHeap.insert(10);
minHeap.insert(5);
minHeap.display(); // [5, 10]
minHeap.remove();
minHeap.display(); // [10]
```

**Graph (Adjacency List Representation)**

```
const Graph = dsa.Graph;
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
graph.display();
// A : [ 'B' ]
// B : [ 'A' ]
```
