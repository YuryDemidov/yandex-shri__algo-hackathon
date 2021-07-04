const a = [7, 1, 4, 3, 13, 11, 1, 1, 1];
const b = [];
const c = [2];
const d = [5, 4, 3, 2, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let wasSwaps = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwaps = true;
      }
    }

    if (!wasSwaps) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort(a));
console.log(bubbleSort(b));
console.log(bubbleSort(c));
console.log(bubbleSort(d));
