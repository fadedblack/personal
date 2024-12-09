function transposeTable(values) {
  const table = [];

  for (let row = 0; row < values[0].length; row += 1) {
    const rows = [];
    for (let column = 0; column < values.length; column += 1) {
      rows.push(values[column][row]);
    }
    table.push(rows);
  }

  return table;
}