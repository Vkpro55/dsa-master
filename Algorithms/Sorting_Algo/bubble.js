function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Optimized: If no swap, array is already sorted
    }
    return arr;
}

module.exports = bubbleSort;

// T.C: O(n²) Worst/Average, O(n) Best (Already sorted)
// S.C: O(1) (In-place)
