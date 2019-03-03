import defaults from 'lodash/defaults';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

import { travel } from './object';

export function appendSearchQuery<T>(url: URL, key: string, value: T): void {
  if (isString(value)) {
    if (value.length > 0) {
      url.searchParams.append(key, value);
    }

    return;
  }

  url.searchParams.append(key, value.toString());
}

export function appendSearchQueries<T extends object>(
  url: URL,
  queries: T | undefined,
  defaultQueries?: Partial<T>,
): void {
  const defaulted = defaults(queries, defaultQueries);

  if (isEmpty(defaulted)) {
    return;
  }

  travel<T>(defaulted, ([key, value]) => appendSearchQuery(url, key, value));
}
