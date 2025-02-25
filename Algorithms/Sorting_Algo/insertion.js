function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift elements to the right
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

module.exports = insertionSort;

// T.C: O(n²) Worst/Average, O(n) Best (Already sorted)
// S.C: O(1) (In-place)
