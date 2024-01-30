function createPhoneNumber(numbers) {
  if (numbers.length != 10) {
    console.log("Array must have 10 elements");
    return "";
  } else {
    const stringNumber = numbers.join("");
    const phoneNumber = stringNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3",
    );
    return phoneNumber;
  }
}
