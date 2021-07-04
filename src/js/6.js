function insertsSorting(arr) {
  if (arr.length === 0) {
    return [];
  }

  const sorted = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let isMax = true;

    for (let j = 0; j < sorted.length; j++) {
      if (arr[i] < sorted[j]) {
        sorted.splice(j, 1, arr[i], sorted[j]);
        isMax = false;
        break;
      }
    }

    isMax && sorted.push(arr[i]);
  }

  return sorted;
}

console.log(insertsSorting([7, 1, 4, 3, 13, 11, 1, 1, 1]));
console.log(insertsSorting([]));
console.log(insertsSorting([2]));
console.log(insertsSorting([5, 4, 3, 2, 1]));
console.log(insertsSorting([1, 1, 1, 1, 1, 1, 1, 1]));
