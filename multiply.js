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

  if (powerOf2 === max) {
    return min << getPowerOf2(max);
  }

  return multiply(min, powerOf2) + multiply(min, max - powerOf2);
}