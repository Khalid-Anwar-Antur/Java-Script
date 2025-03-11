function oddAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}
console.log(oddAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(oddAverage([1, 3, 5, 7, 9])); // Output: 5