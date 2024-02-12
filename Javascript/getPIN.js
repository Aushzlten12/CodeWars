const getPIN = (observed) => {
  let digitsadjacents = {};
  const digits = observed.split("");
  const keypad = [
    ["", "", "", "", ""],
    ["", "1", "2", "3", ""],
    ["", "4", "5", "6", ""],
    ["", "7", "8", "9", ""],
    ["", "", "0", "", ""],
    ["", "", "", "", ""],
  ];
  for (let fila = 0; fila < keypad.length; fila++) {
    for (let columna = 0; columna < keypad[fila].length; columna++) {
      const currentDigit = keypad[fila][columna];

      if (digits.includes(currentDigit)) {
        const adjacents = [
          keypad[fila - 1] && keypad[fila - 1][columna],
          keypad[fila + 1] && keypad[fila + 1][columna],
          keypad[fila][columna - 1],
          keypad[fila][columna + 1],
        ].filter((adjacent) => adjacent !== undefined && adjacent !== "");

        if (!digitsadjacents[currentDigit]) {
          digitsadjacents[currentDigit] = [currentDigit];
        }

        adjacents.forEach((adjacent) => {
          if (!digitsadjacents[currentDigit].includes(adjacent)) {
            digitsadjacents[currentDigit].push(adjacent);
          }
        });
      }
    }
  }

  const generateCombinations = (currentDigits, remainingDigits) => {
    if (remainingDigits.length === 0) {
      results.push(currentDigits.join(""));
    } else {
      const currentDigit = remainingDigits[0];
      if (digitsadjacents[currentDigit]) {
        digitsadjacents[currentDigit].forEach((adjacent) => {
          generateCombinations(
            [...currentDigits, adjacent],
            remainingDigits.slice(1),
          );
        });
      }
    }
  };

  const results = [];
  generateCombinations([], digits);

  return results;
};

getPIN("11");
