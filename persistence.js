function persistence(num) {
  const digits = num.toString().split("");

  digits.forEach((element, index, arr) => {
    if (parseInt(element, 10) === 0) {
      arr[index] = "1";
    }
  });

  if (digits.length === 1) {
    return 0;
  } else {
    const newNumber = digits.reduce((p, d) => {
      return p * d;
    }, 1);
    if (newNumber.toString().split("").length === 1) {
      return newNumber;
    } else {
      return persistence(newNumber);
    }
  }
}
console.log(persistence(25));
