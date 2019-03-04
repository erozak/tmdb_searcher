import iso6391 = require('iso-639-1');

export function getLocaleName(target: string): string {
  if (target && iso6391.validate(target)) {
    return iso6391.getName(target);
  }

  return '';
}
