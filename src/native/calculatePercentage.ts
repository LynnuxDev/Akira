export function calculatePercentage(value: number, maxValue: number): number {
  if (maxValue === 0) {
    throw new Error("Max value cannot be zero");
  }
  return (value / maxValue) * 100;
}
