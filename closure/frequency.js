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

//**********************************Approach 2**********************************

const frequency1 = function (listOfElement) {
  return [...listOfElement].reduce(function (table, element) {
    if (!table.flat().includes(element)) {
      table.push([element, 1]);
      return table;
    }

    const row = table.flat().indexOf(element) >> 1;
    // 1 => 0
    // 3 => 1
    // 5 => 2
    // 7 => 3
    table[row][1] += 1;

    return table;
  }, []);
};

//**********************************Approach 3**********************************

const insertIntoTable = function (table, element) {
  for (const row of table) {
    if (row.includes(element)) {
      row[1] += 1;
      return table;
    }
  }

  table.push([element, 1]);

  return table;
};

const frequency2 = function (string) {
  return [...string].reduce(insertIntoTable, []);
};

//**********************************Approach 4**********************************

const insertIntoTable1 = function (table, element) {
  const rowOrUndefined = table.find(function (row) {
    return row[0] === element;
  });

  if (rowOrUndefined === undefined) {
    table.push([element, 1]);
    return table;
  }

  rowOrUndefined[1] += 1;
  return table;
};

const frequency3 = function (string) {
  return [...string].reduce(insertIntoTable1, []);
};

// hello, l => 2
// ollolo, l => 3
// ollollo, a => -1

// console.log(occurencesOfAll('hello'));
// console.log(occurencesOfAll('himasai'));
// console.log(occurencesOfAll([1,2,3,4,5,1]));
// console.log(occurencesOfAll('gour adhikary'));

console.table(frequency3('priyankush pal'));