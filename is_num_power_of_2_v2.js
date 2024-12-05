function isPowerOf2(number) {
  return number === 0 ? false : (number & (number - 1)) === 0;
}