function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i++]);
        } else {
            sortedArray.push(right[j++]);
        }
    }

    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = mergeSort;

// T.C: O(n log n) Worst/Average/Best
// S.C: O(n) (Extra array)
