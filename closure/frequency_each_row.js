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

const frequency = function (string) {
  return [...string].reduce(insertIntoTable, []);
};