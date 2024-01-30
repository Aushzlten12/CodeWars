function duplicateEncoder(word) {
  const wordSplit = word.toLowerCase().split("");
  return wordSplit
    .map((letter) => {
      if (wordSplit.filter((item) => item === letter).length > 1) {
        return ")";
      } else {
        return "(";
      }
    })
    .join("");
}

console.log(duplicateEncoder("Success"));
