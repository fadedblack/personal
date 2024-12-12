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

//*******************************MULTIPLICATION********************************

function getPowerOf2(number) {
  if (number === 1) {
    return 0;
  }

  return 1 + getPowerOf2(number >> 1);
}

function multiply(number1, number2) {
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  const powerOf2 = 2 << (getPowerOf2(max) - 1);

  if (min <= 1) {
    return min === 0 ? min : max;
  }

  if (powerOf2 === max) {
    return min << getPowerOf2(max);
  }

  return multiply(min, powerOf2) + multiply(min, max - powerOf2);
}

function productValues(multiplicant) {
  const values = [];
  for (let multiplier = 1; multiplier < 11; multiplier += 1) {
    values.push(multiply(multiplicant, multiplier));
  }

  return values;
}

function generateTableData(multiplicant) {
  const values = productValues(multiplicant);
  const heading = ["Multiplicant", "Multiplier", "Product"];
  const tableData = [heading];

  for (let i = 1; i < 11; i += 1) {
    const product = multiplicant + 'x' + i + '=' + values[i - 1];
    const row = [multiplicant, i, product];
    tableData.push(row);
  }

  return tableData;
}

function testAll() {
  console.log(createTable(generateTableData(2)));
}

testAll();