function binarySearch(arr, term) {
  const mid = Math.floor((arr.length - 1) / 2);

  if (arr.length > 1) {
    if (arr[mid] < term) {
      return binarySearch(arr.slice(mid), term);
    } else if (arr[mid] > term) {
      return binarySearch(arr.slice(0, mid), term);
    } else {
      return mid;
    }
  }
  if (arr[0] === term) {
    return mid;
  }

  return -1;
}

console.log(binarySearch([1, 2, 15, 23, 42, 77, 80, 91, 112], 23));
