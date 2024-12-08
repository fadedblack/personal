function repeat(string, times) {
  let repeatedString = '';
  for (let time = 0; time < times; time += 1) {
    repeatedString += string;
  }

  return repeatedString;
}

function getHeading(columns) {
  return '┏━━━━' + repeat('━━━━┳━━━━', columns - 1) + '━━━━┓';
}

function getFooting(columns) {
  return '┗━━━━' + repeat('━━━━┻━━━━', columns - 1) + '━━━━┛';

}

function getRowFooting(columns) {
  return '┣━━━━' + repeat('━━━━╋━━━━', columns - 1) + '━━━━┫';
}

function createTable(rows, columns) {
  let table = getHeading(columns) + '\n';

  for (let row = 1; row < rows; row += 1) {
    table += getRowFooting(columns) + '\n';
  }

  table += getFooting(columns);

  return table;
}

console.log((createTable(5, 4)));
