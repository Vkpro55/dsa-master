function quickSort(arr) {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = arr.filter((el) => el < pivot);
    let right = arr.filter((el) => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;

// T.C: O(n²) Worst, O(n log n) Average/Best
// S.C: O(log n) (Recursive calls)
