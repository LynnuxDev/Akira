import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface Translations {
  [key: string]: any;
}

const BASE_PATH = '/media/lynnux/[E] Other/Codes/@Github/@LynnuxDev/AkiraLocalization';

/**
 * Loads a YAML translation file and retrieves the value for a given key.
 * @param lang - The language code (e.g., 'en', 'es').
 * @param key - The translation key in dot notation (e.g., 'greetings.hello').
 * @returns The translation value or an error message if the key or file is not found.
 */
export function loadYaml(lang: string, key: string): string {
  try {
    const filePath = path.join(
      BASE_PATH,
      lang === 'en'
        ? 'bot/commands.yml'
        : `bot/${lang}/commands.yml`
    );

    if (!fs.existsSync(filePath)) {
      return `Error: Translation file for language "${lang}" not found.`;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const translations: Translations = yaml.load(fileContents) as Translations;

    if (!translations) {
      return `Error: Translation file for language "${lang}" is empty or invalid.`;
    }

    const keys = key.split('.');
    let result: any = translations;

    for (const segment of keys) {
      if (typeof result !== 'object' || result === null) {
        return `Error: Translation key "${key}" not found.`;
      }
      result = result[segment];
    }

    return typeof result === 'string'
      ? result
      : `Error: Translation key "${key}" does not resolve to a string.`;
  } catch (err) {
    if (err instanceof Error) {
      return `Error: Unable to load translations for language "${lang}". Details: ${err.message}`;
    }
    return `Error: An unknown error occurred while loading translations for language "${lang}".`;
  }
}
