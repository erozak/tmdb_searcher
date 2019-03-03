import React from 'react';

import { useBehaviorSubject } from '../../utils/useSubject';
import { FindBarContext, IFindBarContextValue } from './context';

export interface IFindBarQueryManagerProps {
  children: React.ReactChild;
  initialQuery?: string;
}

const FindBarQueryManager: React.FunctionComponent<
  IFindBarQueryManagerProps
> = ({ children, initialQuery }) => {
  const [query$, pushQuery] = useBehaviorSubject(initialQuery);
  const contextValue = React.useMemo<IFindBarContextValue>(
    () => ({ query$, pushQuery }),
    [query$, pushQuery],
  );

  return (
    <FindBarContext.Provider value={contextValue}>
      {children}
    </FindBarContext.Provider>
  );
};

FindBarQueryManager.defaultProps = {
  initialQuery: '',
};

export default FindBarQueryManager;
