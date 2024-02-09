const solution = (text, markers) => {
  let i = 0;
  let wordreturned = [];
  let pushed = true;
  while (i < text.length) {
    if (markers.includes(text[i]) === true) {
      pushed = false;

      wordreturned = wordreturned
        .join("")
        .replace(/[ \t]+$/, "")
        .split("");
    }
    if (text[i] === "\n") {
      pushed = true;
    }

    if (pushed) {
      wordreturned.push(text[i]);
    }

    i = i + 1;
  }
  return wordreturned.join("").replace(/[ \t]+$/, "");
};

solution("aa bb\n#cc dd", ["#"]);
// joder
