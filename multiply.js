//************************************TABLE*************************************

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

//*******************************MULTIPLICATION********************************

function getPowerOf2(number) {
  if (number === 1) {
    return 0;
  }

  return 1 + getPowerOf2(number >> 1);
}

function multiply(number1, number2) {
  const min = number1 < number2 ? number1 : number2;
  const max = number1 > number2 ? number1 : number2;

  const powerOf2 = 2 << (getPowerOf2(max) - 1);

  if (min === 1) {
    return max;
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
    const product = i + 'x' + multiplicant + '=' + values[i - 1];
    const row = [multiplicant, i, product];
    tableData.push(row);
  }

  return tableData;
}

const tableData = generateTableData(435);
console.log(createTable(tableData));