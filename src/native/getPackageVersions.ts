import { spawnSync } from 'child_process';

/**
 * Get the package names and versions.
 * @returns The packages installed and their versions
 */
export function getPackages(): string {
  let packageList = '';

  try {
    const lsProcess = spawnSync('pnpm', ['ls', '--json', '--depth=1']);

    if (lsProcess.error) {
      throw lsProcess.error as Error;
    }

    const parsedData = JSON.parse(lsProcess.stdout.toString());

    parsedData.forEach((pkg: any) => {
      if (pkg.dependencies) {
        Object.entries(pkg.dependencies).forEach(([name, dep]) => {
          if (dep && typeof dep === 'object' && 'version' in dep) {
            packageList += `${name}: ${dep.version}\n`;
          }
        });
      }
    });
  } catch (error) {
    throw new Error(`Failed to retrieve package list: ${(error as Error).message}`);
  }

  return packageList;  // return string
}
