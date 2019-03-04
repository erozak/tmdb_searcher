import isFunction = require('lodash/isFunction');
import React from 'react';
import CardList from '../../elements/CardList';

export interface IMovieListProps<T = any> {
  list: T[];
  children?: (key: T) => React.ReactChild | null;
}

const MovieListComponent: React.FC<IMovieListProps> = ({ list, children }) => (
  <CardList.Block>
    {isFunction(children) ? list.map(children) : null}
  </CardList.Block>
);

export default React.memo(MovieListComponent);
