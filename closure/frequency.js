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

// hello, l => 2
// ollolo, l => 3
// ollollo, a => -1

// console.log(occurencesOfAll('hello'));
// console.log(occurencesOfAll('himasai'));
// console.log(occurencesOfAll([1,2,3,4,5,1]));
// console.log(occurencesOfAll('gour adhikary'));