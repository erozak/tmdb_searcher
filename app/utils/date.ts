import format from 'date-fns/format';

export function formatAsISO8601Date(target: string | number | Date) {
  return format(target, 'YYYY-MM-DD');
}
