// [5,2,3,4,1,10,6,7,9,8] => [1,2,3,4,5,6,10,9,8,7]

const sortAroundPivot = function (array, pivot) {
  return array.sort(function (a, b) {
    if (b > pivot && a > pivot) {
      return b - a;
    }

    return a - b;
  });
};

console.log(sortAroundPivot([5,2,3,4,1,10,6,7,9,8], 6));