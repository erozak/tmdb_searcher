import isFunction from 'lodash/isFunction';
import times from 'lodash/times';
import defaults from 'lodash/defaults';

export function generateOne<T extends object>(generator: () => T) {
  return (specified?: Partial<T>): T => defaults(specified, generator());
}

export function generateMulti<T extends object>(generator: (specified?: Partial<T>) => T) {
  const toGenerateOne = generateOne(generator);

  return (size: number, specifyData?: (index: number) => Partial<T>): T[] => {
    const needSpecifyData = isFunction(specifyData);

    return times(size).map(order => needSpecifyData ? toGenerateOne(specifyData(order)) : toGenerateOne());
  };
}
