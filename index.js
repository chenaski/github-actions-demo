export function random({ min, max }) {
  return Math.floor(Math.random() * (max - (min ?? 0) + 1) + (min ?? 0));
}
