function generateHashtag(str) {
  if (str.trim().length === 0) return false;
  const onlyWords = str.split(" ").filter((word) => word.length > 0);
  if (onlyWords.join("").length >= 140) return false;
  const capitalizeWords = onlyWords.map((word) => {
    const firstChar = word[0].toUpperCase();
    word = word.replace(word[0], firstChar);
    return word;
  });
  return "#" + capitalizeWords.join("");
}

console.log(generateHashtag("a".repeat(140)));
