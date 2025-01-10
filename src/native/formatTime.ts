/**
 * @deprecated
 * gives time in 0d 0h 0m 0s etc .
 * @param ms time to start from in ms.
 * @returns Return format time.
 */

export function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
}