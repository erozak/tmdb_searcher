import { createContext } from 'react';

import { TMDB } from '../../modules/TMDB';

export interface IServiceManagerContextValue {
  tmdb: TMDB;
}

export const ServiceManagerContext = createContext<IServiceManagerContextValue | null>(null);
