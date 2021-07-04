function binarySearch(arr, term) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid] === term) {
      return mid;
    } else if (arr[mid] > term) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91, 112], 80));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91, 112], 1));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91, 112], 112));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91, 112], 42));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91, 112], 10));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91], 80));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91], 91));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91], 1));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91], 42));
console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91], 10));
