const isEven = function (number) {
  return (number & 1) === 0;
};

const isOdd = function (number) {
  return (number & 1) === 1;
};

const evenAscendingSort = function (array) {
  return array.sort(function (a, b) {
    if (isEven(a) && isOdd(b)) {
      return -1;
    }

    if (isOdd(a) && isEven(b)) {
      return 1;
    }

    return a - b;
  });
};