// @ts-ignore
// @ts-nocheck

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function loadYaml(lang, key) {
  try {
    const filePath = lang === 'en'
    ? path.join(__dirname, '../../AkiraLocalization/bot/commands.yml')
    : path.join(__dirname, `../../AkiraLocalization/bot/${lang}/commands.yml`);

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const translations = yaml.load(fileContents);

    const keys = key.split('.');

    let result = translations;
    for (let i = 0; i < keys.length; i++) {
      result = result[keys[i]];
      if (result === undefined) {
        return `Error: Translation key "${key}" not found.`;
      }
    }

    return result;
  } catch (err) {
    return `Error: Unable to load translations for language "${lang}".`;
  }
}

module.exports = { loadYaml };
