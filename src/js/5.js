function getPrimeNumbers(max) {
  const primeNumbers = [1, 2];

  if (max === 2) {
    return primeNumbers;
  }

  let num = 3;

  while (num < max) {
    let isPrime = true;

    for (let i = 1; i < primeNumbers.length; i++) {
      if (primeNumbers[i] > Math.floor(Math.sqrt(num)) + 1) {
        break;
      }

      if (num % primeNumbers[i] === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeNumbers.push(num);
    }

    num += 2;
  }

  return primeNumbers;
}

console.log(getPrimeNumbers(200));
