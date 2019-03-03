import { History } from 'history';
import { createContext } from 'react';

import { TMDBManager } from '../../modules/TMDBManager';

export interface IServiceManagerContextValue {
  tmdb: TMDBManager;
  history: History;
}

export const ServiceManagerContext = createContext<IServiceManagerContextValue | null>(
  null,
);
