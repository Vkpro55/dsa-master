function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

module.exports = linearSearch;

// T.C: O(n) Worst/Average/Best
// S.C: O(1)
