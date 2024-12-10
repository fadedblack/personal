//************************************TABLE*************************************
const DASH = '━';
const BAR = '┃';
const SPACE = ' ';

function isEven(number) {
  return (number & 1) === 0;
}

function insertData(message, size) {
  const totalSpaces = size - (message + '').length;
  const extraSpaces = isEven(size) ? 0 : 1; // should i use the binary operation
  // value directly?

  return BAR + SPACE.repeat(Math.floor(totalSpaces / 2)) + message +
    SPACE.repeat(Math.ceil(totalSpaces / 2) + extraSpaces);
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

const values = [
  // ["Multiplier", "Multiplicant", "Product"],
  // [1, 2, 2],
  // [2, 2, 4],
  // [3, 2, 6],
  // [4, 2, 8],
  // [5, 2, 10],
  // [6, 2, 12],
  // [7, 2, 14],
  // [8, 2, 16],
  // [9, 2, 18],
  // [10, 2, 20]
  ["Name", "Age", "Designation"],
  ["Shalu Jha", 32, "Intern"],
  ["Mallika Hajra", 12, "Intern"],
  ["Inkeet", 54, '-'],
  ["Vineet Jain", Infinity, "Boss"],
  ["Adhithiyan MR", 22, "The Legend"]
];

console.log((createTable(values)));