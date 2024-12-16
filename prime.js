// find even from list, calculate primes, and return square

const isSmaller = function (entity1, entity2) {
  return entity2 > entity1;
};

const isGreater = function (entity1, entity2) {
  return entity1 > entity2;
};

const getCondition = function (entity1, entity2) {
  return entity1 > entity2 ? isGreater : isSmaller;
};

const isNotValidParameters = function (from, to, jump) {
  return jump >= 0 && from >= to;
};

const range = function (from, to, jump) {
  if (isNotValidParameters(from, to, jump)) {
    return [];
  }

  const numbers = [];
  const condition = getCondition(from, to);

  for (let index = from; condition(index, to); index += jump) {
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
  if (number < 2) {
    return false;
  }

  return range(2, number - 1, 1).reduce(reducer, [number, true])[1];
};

//**********************************TEST****************************************
console.log(prime(0) === false);
console.log(prime(1) === false);
console.log(prime(2) === true);
console.log(prime(3) === true);
console.log(prime(4) === false);
console.log(prime(5) === true);
console.log(prime(121) === false);