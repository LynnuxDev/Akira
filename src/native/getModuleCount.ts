import fs from 'fs';
import path from 'path';

const baseDir: string = '/media/lynnux/[E] Other/Codes/@Github/@LynnuxDev/Akira-Beta';
const isDevelopment: boolean = process.env.NODE_ENV === 'development';
const commandsPath: string = isDevelopment ? 'src/commands' : 'dist/commands';

/**
 * Gets the total count of files and folders in a specified module folder.
 * @param moduleName - The name of the module to check.
 * @returns The total count of files and folders.
 */
export function getModuleCount(moduleName: string): number {
  const targetDir = path.join(baseDir, commandsPath, moduleName);

  if (!fs.existsSync(targetDir)) {
    throw new Error(`Module '${moduleName}' does not exist in ${targetDir}`);
  }

  let count = 0;

  const traverse = (dir: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach((entry) => {
      if (entry.isFile() && entry.name.endsWith('.ts')) {
        count += 1;
      }

      if (entry.isDirectory()) {
        traverse(path.join(dir, entry.name));
      }
    });
  };

  traverse(targetDir);

  return count;
}
