import { execSync } from 'child_process';

/**
 * Get the version of Akira.
 * @returns Return Akira with their versions.
 */
export function getPackages(): string {
  try {
    const output = execSync('pnpm ls --depth=0 --json', { encoding: 'utf8' });
    
    const packages = JSON.parse(output);

    return packages.map((pkg: { name: string, version: string }) => `${pkg.name}: ${pkg.version}`).join('\n');
  } catch (err) {
    console.error('Error:', (err as Error).message);
    return '';
  }
}
