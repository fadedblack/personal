function getBorder(start, middle, end, columns, length) {
  const times = Math.ceil(length / 2);
  const column = '━'.repeat(times) + middle + '━'.repeat(times);

  const startingSegment = start + '━'.repeat(times);
  const endingSegment = '━'.repeat(times) + end;

  return startingSegment + column.repeat(columns - 1) + endingSegment;
}

function isEven(number) {
  return (number & 1) !== 1;
}

function insertData(message, size) {
  const totalSpaces = size - (message + '').length;

  const extraSpaces = isEven(size) ? 0 : 1;

  return '┃' + ' '.repeat(Math.floor(totalSpaces / 2)) + message +
    ' '.repeat(Math.ceil(totalSpaces / 2) + extraSpaces);
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

function insertAllData(values, size) {
  let table = '';

  for (let row = 0; row < values.length - 1; row += 1) {
    for (let column = 0; column < values[row].length; column += 1) {
      table += insertData(values[row][column], size);
    }

    table += '┃\n' + getBorder('┣', '╋', '┫', values[0].length, size) + '\n';
  }

  return table;
}

function createTable(values) {
  const size = getLargestSize(values);
  
  let table = getBorder('┏', '┳', '┓', values[0].length, size) + '\n';

  table += insertAllData(values, size);

  for (let k = 0; k < values[values.length - 1].length; k += 1) {
    table += insertData(values[values.length - 1][k], size);
  }

  table += '┃\n' + getBorder('┗', '┻', '┛', values[0].length, size);

  return table;
}

const values = [
  ["Multiplier", "Multiplicant", "Product"],
  [1, 2, 2],
  [2, 2, 4],
  [3, 2, 6],
  [4, 2, 8],
  [5, 2, 10],
  [6, 2, 12],
  [7, 2, 14],
  [8, 2, 16],
  [9, 2, 18],
  [10, 2, 20]
  // ["Name", "Age", "Designation"],
  // ["Shalu Jha", 32, "Intern"],
  // ["Mallika Hajra", 12, "Intern"],
  // ["Inkeet", 54, '-'],
  // ["Vineet Jain", Infinity, "Boss"],
  // ["Adhithiyan MR", 22, "The Legend"]
];

console.log((createTable(values)));