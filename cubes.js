const findNb = (m) => {
  let n = 1;
  while (m > 0) {
    m -= Math.pow(n, 3);
    if (m === 0) {
      return n;
    }
    n += 1;
  }
  return -1;
};

console.log(findNb(1071225));
