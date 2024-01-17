const solution = (number) => {
  if (number < 0) {
    return 0;
  } else {
    const arrayNumeros = Array.from(Array(number).keys());
    return arrayNumeros.reduce((accumalator, currentValue) => {
      if (
        (currentValue % 3 === 0 || currentValue % 5 === 0) &&
        currentValue !== 0
      ) {
        return accumalator + currentValue;
      } else {
        return accumalator;
      }
    }, 0);
  }
};

console.log(solution(10));
