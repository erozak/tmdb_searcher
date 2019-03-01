import startsWith from 'lodash/startsWith';

export default function resolveTMDBImage(target: string): string {
  const base = 'http://image.tmdb.org/t/p';

  if (startsWith('/', target)) {
    return base + target;
  }

  return `${base}/${target}`;
}
