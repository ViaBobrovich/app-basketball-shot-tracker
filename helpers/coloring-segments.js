export function coloringSegments(segment, p) {
  for (let i = 1; i <= 21; i++) {
    if (p < 5 * i) {
      segment.style.fill = `hsla(${p < 50 ? 240 : 0}, ${
        p < 50 ? 100 - 10 * (i - 1) : 0 + 10 * (i - 10)
      }% , 50%, 0.5)`;
      return;
    }
  }
}
