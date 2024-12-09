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
  const spacesToAdd = size - (message + '').length;

  const newSpaces = isEven(spacesToAdd) ? spacesToAdd : spacesToAdd + 1;
  const extraSpace = isEven(spacesToAdd) ? 1 : 0;

  return '┃' + ' '.repeat(newSpaces / 2) + message +
    ' '.repeat(newSpaces / 2 + extraSpace);
}

function getLargestElement(values) {
  let element = 0;
  for (let row = 0; row < values.length; row += 1) {
    for (let column = 0; column < values[row].length; column += 1) {
      if (element < (values[row][column] + '').length) {
        element = (values[row][column] + '').length;
      }
    }
  }

  return element;
}

function createTable(values) {
  const size = getLargestElement(values);

  let table = getBorder('┏', '┳', '┓', values[0].length, size) + '\n';

  for (let row = 0; row < values.length - 1; row += 1) {
    for (let column = 0; column < values[row].length; column += 1) {
      table += insertData(values[row][column], size);
    }
    table += '┃\n' + getBorder('┣', '╋', '┫', values[0].length, size) + '\n';
  }

  for (let k = 0; k < values[values.length - 1].length; k += 1) {
    table += insertData(values[values.length - 1][k], size);
  }

  table += '┃\n' + getBorder('┗', '┻', '┛', values[0].length, size);

  return table;
}

const values = [
  ["Name", "Age", "Designation"],
  ["Shalu Jha", 32, "Intern"],
  ["Mallika Hajra", 12, "Intern"],
  ["Inkeet", 54, '-'],
  ["Vineet Jain", Infinity, "Boss"],
  ["Adhithiyan MR", 22, "The Legend"]
];

console.log((createTable(values)));
