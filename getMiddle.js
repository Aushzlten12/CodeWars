function getMiddle(s) {
  const stringSplit = s.split("");
  const indexMiddle = stringSplit.length / 2;
  if (stringSplit.length % 2 === 0) {
    return s.substring(indexMiddle - 1, indexMiddle + 1);
  } else {
    return s.substring(Math.floor(indexMiddle), Math.floor(indexMiddle) + 1);
  }
}

console.log(getMiddle("A"));
