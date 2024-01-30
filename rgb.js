function rgb(r, g, b) {
  return (
    (r > 255
      ? "FF"
      : r <= 0
        ? "00"
        : (r <= 15 ? "0" : "") + r.toString(16).toUpperCase()) +
    (g > 255
      ? "FF"
      : g <= 0
        ? "00"
        : (g <= 15 ? "0" : "") + g.toString(16).toUpperCase()) +
    (b > 255
      ? "FF"
      : b <= 0
        ? "00"
        : (b <= 15 ? "0" : "") + b.toString(16).toUpperCase())
  );
}

console.log(rgb(181, -8, 262));
