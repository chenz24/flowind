export function randomId() {
  return `flowind-${Math.random().toString(36).slice(2, 11)}`;
}
