const isSmaller = function (entity1, entity2) {
  return entity2 > entity1;
};

const isGreater = function (entity1, entity2) {
  return entity1 > entity2;
};

const getCondition = function (entity1, entity2) {
  return entity1 > entity2 ? isGreater : isSmaller;
};

const range = function (from, to, jump) {
  const numbers = [];
  const condition = getCondition(from, to);

  for (let i = from; condition(i, to); i += jump) {
    numbers.push(i);
  }

  return numbers;
};