function multiply(number1, number2) {
  // doing for even
  const min = number1 < number2 ? number1 : number2;
  const max = number1 > number2 ? number1 : number2;

  return max << (min >> 1);
}