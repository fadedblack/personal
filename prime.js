// find even from list, calculate primes, and return square
const range = function (from, to, jump) {
  const numbers = [];

  for (let index = from; index < to; index += jump) {
    numbers.push(index);
  }

  return numbers;
};

const isNotDivided = function (dividend, divisor) {
  return dividend % divisor !== 0;
};

const reducer = function ([primeCandidate, predicate], divisor) {
  predicate = isNotDivided(primeCandidate, divisor) && predicate;

  return [primeCandidate, predicate];
};

const prime = function (number) {
  if (number < 3) {
    return number === 2;
  }

  return range(2, Math.sqrt(number) + 1, 1).reduce(reducer, [number, true])[1];
};// use every or some

//**********************************TEST****************************************
console.log(prime(0) === false);
console.log(prime(1) === false);
console.log(prime(2) === true);
console.log(prime(3) === true);
console.log(prime(4) === false);
console.log(prime(5) === true);
console.log(prime(121) === false);