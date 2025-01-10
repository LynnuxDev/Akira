import { execSync } from 'child_process';

/**
 * Gets the neofetch of information used for !neofetch (dev only).
 * @returns neofetch information.
 */
export function getNeofetch(): string {
  try {
    const output = execSync('neofetch --off --stdout --noImage', { encoding: 'utf-8' });
    return output;
  } catch (error) {
    console.error('Error executing neofetch:', error);
    return 'Failed to retrieve neofetch output.';
  }
}
