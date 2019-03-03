import { createContext } from 'react';
import { Subject } from 'rxjs';

export interface IFindBarContextValue {
  query$: Subject<string>;
  pushQuery: (query: string) => void;
}

export const FindBarContext = createContext<IFindBarContextValue | null>(null);
