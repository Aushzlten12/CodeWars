function likes(names) {
  return names.length === 0
    ? "no one likes this"
    : names.length >= 4
      ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      : names.length === 1
        ? `${names[0]} likes this`
        : `${names.slice(0, names.length - 1).join(", ")} and ${names[names.length - 1]} like this`;
}

console.log(likes(["Alex", "Jacob", "Max"]));
