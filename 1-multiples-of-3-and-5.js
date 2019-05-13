// Problem 1 Multiples of 3 and 5
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. 
*/

multiplesOf3And5 = () => {
  let multiples;
  let multiplesOf3 = [];
  let multiplesOf5 = [];
  for (let index = 0; index < 1000; index++) {
    if (index % 3 == 0 && index <= 1000) {
      multiplesOf3.push(index);
    } else if (index % 5 == 0 && index <= 1000) {
      multiplesOf5.push(index);
    }
    multiples = {
      multiplesOf3,
      multiplesOf5
    };
  }
  return multiples;
};

const multiplesObj = multiplesOf3And5();
const totalMultiplesOf3 = multiplesObj.multiplesOf3.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const totalMultiplesOf5 = multiplesObj.multiplesOf5.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

const totalSumOfMultiplesOf3And5Bellow1000 =
  totalMultiplesOf3 + totalMultiplesOf5;

multiplesObj;
totalMultiplesOf3;
totalMultiplesOf5;
totalSumOfMultiplesOf3And5Bellow1000;
