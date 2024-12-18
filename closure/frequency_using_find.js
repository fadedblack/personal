//**********************************Approach 4**********************************

const updateFrequency = function (frequencyTable, element) {
  const matchingRow = frequencyTable.find(function (row) {
    return row[0] === element;
  });

  if (matchingRow === undefined) {
    frequencyTable.push([element, 1]);
    return frequencyTable;
  }

  matchingRow[1] += 1;
  return frequencyTable;
};

const frequency = function (string) {
  return [...string].reduce(updateFrequency, []);
};