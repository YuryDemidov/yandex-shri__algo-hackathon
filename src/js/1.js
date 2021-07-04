const a = [7, 1, 4, 3, 13, 11, 1, 1, 1];

function bubbleSort(arr) {
  debugger;
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
