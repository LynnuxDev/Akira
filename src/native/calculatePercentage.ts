/**
 * Simply calculates the percentage of 2 values.
 * @param value the given value
 * @param maxValue the max value aka 100%
 * @returns Return the calculated percentage.
 */
export function calculatePercentage(value: number, maxValue: number): number {
  if (maxValue === 0) {
    throw new Error("Max value cannot be zero");
  }
  return (value / maxValue) * 100;
}
