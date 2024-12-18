const ascendingSort = function (array) {
  return array.sort(function (a, b) {
    console.log('a:', a, 'b:', b);
    console.log('array: ', array);

    return a - b;
  });
};

const descendingSort = function (array) {
  return array.sort(function (a, b) {
    console.log('a:', a, 'b:', b);
    console.log('array: ', array);

    return b - a;
  });
};

const isEven = function (number) {
  return (number & 1) === 0;
};

// if (isEven(a) || isEven(b) { // reverse the array
const evenAscendingSort = function (array) {
  array.sort(function (a, b) {
    return a - b;
  });

  return array.sort(function (a, b) {
    if (isEven(b)) {
      return 1;
    }

    return -1;
  });
};

const isOdd = function (number) {
  return (number & 1) === 1;
};

const oddAscendingSort = function (array) {

  return array.sort(function (a, b) {

    if (isOdd(a)) {
      return -1;
    }

    return 1;
  });
};

console.log(evenAscendingSort([1, 4, 3, 0, 2, 5]));
// [0,2,4,1,3,5]