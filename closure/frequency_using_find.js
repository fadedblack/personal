//**********************************Approach 4**********************************

const insertIntoTable = function (table, element) {
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

const frequency = function (string) {
  return [...string].reduce(insertIntoTable, []);
};