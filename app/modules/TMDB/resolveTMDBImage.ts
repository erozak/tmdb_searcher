import startsWith from 'lodash/startsWith';

export default function resolveTMDBImage(size: string, target: string): string {
  const base = `http://image.tmdb.org/t/p/${size}`;

  if (startsWith(target, '/')) {
    return base + target;
  }

  return `${base}/${target}`;
}
