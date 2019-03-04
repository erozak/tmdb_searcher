import { ArrayIterator } from 'lodash';
import isEmpty from 'lodash/isEmpty';
import toPairs from 'lodash/toPairs';

import { ValueOf } from '../globals';

export function travel<T extends object>(
  target: T,
  iteratee: ArrayIterator<[string, ValueOf<T>], any>,
) {
  if (isEmpty(target)) {
    return target;
  }

  toPairs(target).forEach(iteratee);

  return target;
}

export function empty<T extends object>(): T {
  // tslint:disable-next-line:no-object-literal-type-assertion
  const emptyObject = {} as T;

  return emptyObject;
}
