const range = function (from, to, jump) {
  const numbers = [];

  for (let i = from; i < to; i += jump) {
    numbers.push(i);
  }

  return numbers;
};

const getStarPositions = function (columns) {
  const positions = range(0, columns, 1);

  return positions;
};

const rectangle = function (rows, columns) {
  const starPositions = getStarPositions(columns);
};

//************************************TABLE*************************************
const DASH = '━';
const BAR = '┃';
const SPACE = ' ';

function isEven(number) {
  return (number & 1) === 0;
}

function insertData(message, size) {
  const totalSpaces = size - message.toString().length;
  const padding = isEven(size) ? 0 : 1;

  const timesLeft = Math.floor(totalSpaces / 2);
  const timesRight = Math.ceil(totalSpaces / 2) + padding;

  return BAR + SPACE.repeat(timesLeft) + message + SPACE.repeat(timesRight);
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
        longestString = string.toString();
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

function display(table) {
  console.log(table);
}

function getMark(acutal, expected) {
  return acutal.toString() === expected.toString() ? '🟢' : '🔴';
}

function test(input, expected, tableData) {
  const acutal = rectangle(input);
  const mark = getMark(acutal, expected);

  const testData = [mark, input, expected, acutal];

  tableData.push(testData);
}

function getHeading(inputs) {
  const heading = ["Status"];

  for (const input of inputs) {
    heading.push(input);
  }
  heading.push("Expected Output", "Actual Output");
  return heading;
}

function printTable(tableData) {
  display(createTable(tableData));
}

function testRectangle(rows, columns, expected, tableData) {
  const acutal = rectangle(rows, columns);
  const mark = getMark(acutal, expected);

  const testData = [mark, rows, columns, expected, acutal];

  tableData.push(testData);
}

function testRange(from, to, jump, expected, tableData) {
  const acutal = range(from, to, jump);
  const mark = getMark(acutal, expected);

  const testData = [mark, from, to, jump, expected, acutal];

  tableData.push(testData);
}

function testGetStartPositions(columns, expected, tableData) {
  const acutal = getStarPositions(columns);
  const mark = getMark(acutal, expected);

  const testData = [mark, columns, expected, acutal];

  tableData.push(testData);
}

function testLeadingFunction() { //change name
  testRectangle();
}

function testAllRange() {
  display("Testing Range Function");

  const tableData = [getHeading(["Start", "End", "Jump"])];

  testRange(0, 10, 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], tableData);
  testRange(0, 10, 2, [0, 2, 4, 6, 8], tableData);

  printTable(tableData);
}

function testAllGetStartPositions() {
  display("Testing Get Start Positions Function");

  const tableData = [getHeading(["Columns"])];

  testGetStartPositions(2, [0, 1], tableData);
  testGetStartPositions(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], tableData);

  printTable(tableData);
}

function testSupportingFunctions() {
  testAllRange();
  testAllGetStartPositions();
}

function testAll() {
  testSupportingFunctions();
}

testAll();