//**********************************Approach 2**********************************

const frequency = function (listOfElement) {
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