//**********************************Approach 1**********************************

const elementOccurences = function ([match, occurred], char) {
  if (char === match) {
    occurred += 1;
  }

  return [match, occurred];
};

const occurences = function (string, char) {
  return [...string].reduce(elementOccurences, [char, 0]);
};

const getUniqueElements = function (uniqueElements, currentChar) {
  if (!uniqueElements.includes(currentChar)) {
    uniqueElements.push(currentChar);
  }

  return uniqueElements;
};

const removeDuplicate = function (string) {
  return [...string].reduce(getUniqueElements, []);
};

const frequency = function (string) {
  const uniqueStrings = removeDuplicate(string);

  return uniqueStrings.reduce(function (array, char) {
    array.push(occurences(string, char));
    return array;
  }, []);
};