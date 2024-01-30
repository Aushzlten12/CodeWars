const digPow = (n, p) => {
  const suma = n
    .toString()
    .split("")
    .reduce((previous, current) => {
      p++;
      return (previous += Math.pow(parseInt(current), p - 1));
    }, 0);
  if (suma % n === 0) {
    return suma / n;
  }
  return -1;
};

digPow(695, 2);
