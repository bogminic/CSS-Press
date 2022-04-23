export function isNumeric(value: string | undefined): boolean {
  if (!value) return false;
  return /^\d+$/.test(value);
}
