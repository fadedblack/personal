function toBinary(number) {
  if (number === 0) {
    return '0';
  }

  return toBinary(number >> 1) + (number & 1);
}

function occurences(string, char) {
  let occuring = 0;
  for (let chars = 0; chars < string.length; chars += 1) {
    if (string[chars] === char) {
      occuring += 1;
    }
  }

  return occuring;
}

function isNumPowerOf2(number) {
  return occurences(toBinary(number), '1') === 1;
}