function add(number1, number2) {
  return number1 + number2;
}

//************************************TABLE*************************************
const DASH = '━';
const BAR = '┃';
const SPACE = ' ';

function isEven(number) {
  return (number & 1) === 0;
}

function insertData(message, size) {
  const totalSpaces = size - (message + '').length;
  const padding = isEven(size) ? 0 : 1;

  return BAR + SPACE.repeat(Math.floor(totalSpaces / 2)) + message +
    SPACE.repeat(Math.ceil(totalSpaces / 2) + padding);
}

function insertAllData(values, size) {
  let table = [];

  for (const row of values) {
    for (const column of row) {
      table.push(insertData(column, size));
    }

    table.push('┃\n' + getBorder('┣', '╋', '┫', row.length, size) + '\n');
  }

  table.pop();
  return table.join("");
}

function getBorder(start, middle, end, columns, length) {
  const times = Math.ceil(length / 2);
  const column = DASH.repeat(times) + middle + DASH.repeat(times);

  const startingSegment = start + DASH.repeat(times);
  const endingSegment = DASH.repeat(times) + end;

  return startingSegment + column.repeat(columns - 1) + endingSegment;
}

function getLargestSize(values) {
  let longestString = '';

  for (const rows of values) {
    for (const string of rows) {
      if (string.toString().length > longestString.length) {
        longestString = string;
      }
    }
  }

  return longestString.length;
}

function createTable(values) {
  const size = getLargestSize(values);

  const table = getBorder('┏', '┳', '┓', values[0].length, size) + '\n';
  const bottom = '┃\n' + getBorder('┗', '┻', '┛', values[0].length, size);

  return table + insertAllData(values, size) + bottom;
}

//***********************************TESTING***********************************
const tableData = [];

function display(table) {
  console.log(table);
}

function getMark(acutal, expected) {
  return acutal === expected ? '🟢' : '🔴';
}

function test(number1, number2, expected) {
  const acutal = add(number1, number2);
  const mark = getMark(acutal, expected);

  const row = [mark, number1, number2, expected, acutal];

  tableData.push(row);
}

function getHeading() {
  const heading = [
    "Status", "Number1", "Number2",
    "Expected Output", "Actual Output"
  ];

  return heading;
}

function testAll() {
  tableData.push(getHeading());

  test(1, 2, 3);
  test(1, 3, 4);
  test(1, 3, 7);

  const table = createTable(tableData);
  display(table);
}

testAll();