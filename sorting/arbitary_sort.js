// [5,2,3,4,1,10,6,7,9,8] => [1,2,3,4,5,6,10,9,8,7]

const sortAroundPivot = function (array, pivot) {
  array.sort(function (a, b) {
    return b - a;
  });

  return array.sort(function (a) {
    if (a > pivot) {
      return -1;
    }

    return 1;
  }).sort(function () {
    return -1;
  });
};

// console.log(sortAroundPivot([5, 2, 3, 4, 1, 10, 6, 7, 9, 8], 6));
console.log(sortAroundPivot([5, 2, 3, 4], 2));

// [5,4,3] => []

[5, 4, 3].sort(function (a, b) {
  console.log('a:', a, 'b:', b);
  return a - b;
});

// [4,5,3] => [3,4,5]
// [5,4,3] => [4,5,3] => 