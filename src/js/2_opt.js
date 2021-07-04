const a = [7, 1, 4, 3, 13, 11, 1, 1, 1];
const b = [];
const c = [2];
const d = [5, 4, 3, 2, 1];
const e = [1, 1, 1, 1, 1, 1, 1, 1];

function selectionSort(arr) {
  const sorted = [...arr];

  for (let i = 0; i < sorted.length - 1; i++) {
    let minValueIndex = i;
    let maxValueIndex = i;
    let isSorted = true;

    for (let j = i + 1; j < sorted.length - i; j++) {
      if (sorted[minValueIndex] > sorted[j]) {
        minValueIndex = j;
        isSorted = false;
      }
      if (sorted[maxValueIndex] < sorted[j]) {
        maxValueIndex = j;
        isSorted = false;
      }
    }

    if (isSorted) {
      break;
    }

    [sorted[i], sorted[minValueIndex]] = [sorted[minValueIndex], sorted[i]];

    if (maxValueIndex === i) {
      maxValueIndex = minValueIndex;
    }
    [sorted[sorted.length - i - 1], sorted[maxValueIndex]] = [sorted[maxValueIndex], sorted[sorted.length - i - 1]];
  }

  return sorted;
}

console.log(selectionSort(a));
console.log(selectionSort(b));
console.log(selectionSort(c));
console.log(selectionSort(d));
console.log(selectionSort(e));
