/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const bigAssNumber = 600851475143;

const largestPrimeFactor = num => {
  if (num % 3 == 0) {
    return true;
  } else {
    return false;
  }
};

const listOfPrimeNumbers = () => {
  let primeArr = [];
  let primeNum = 0;
  const limit = 1000;
  for (let i = limit; i > 0; i--) {
    for (let j = 0; j < limit; j++) {
      if (i % j == 0) {
        primeArr.push(primeNum);
      }
    }
  }
  return primeArr;
};

const lopn = listOfPrimeNumbers();
lopn;

const lpn = largestPrimeFactor(bigAssNumber);
lpn;

const FactorsOfANumber = number => {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (i % 1 == 0) {
      const res = number % i;
      arr.push(res);
    }
  }
  return arr;
};

const fc = FactorsOfANumber(50);
fc;
