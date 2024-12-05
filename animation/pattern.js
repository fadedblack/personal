function createScreen(height, width) {
  const screen = [];

  for (let i = 0; i < height; i += 1) {
    const line = [];
    for (let j = 0; j < width; j += 1) {
      line.push(' ');
    }
    screen.push(line);
  }

  return screen;
}

function put(char, screen, y, x) {
  screen[y][x] = char;
}

function screenToString(screen) {
  let screenString = '';
  for (let i = 0; i < screen.length; i += 1) {
    screenString += screen[i].join('');
    screenString += '\n';
  }

  return screenString;
}

function createLine(screen, char, x1, x2, y) {
  for (let x = x1; x < x2; x += 1) {
    screen[y][x] = char;
  }
}

function moveBy() {
  
}

function display(screen) {
  createLine(screen, '-', 0, 5, 4);
  console.log(screenToString(screen));
}

const screen = createScreen(10, 10);
display(screen);