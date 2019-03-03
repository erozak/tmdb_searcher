import { History } from 'history';
import React from 'react';

import { TMDBManager } from '../../modules/TMDBManager';
import { IServiceManagerContextValue, ServiceManagerContext } from './context';

export interface IServiceManagerProps {
  tmdb: TMDBManager;
  history: History;
  children: React.ReactChild;
}

const ServiceManagerContainer: React.FunctionComponent<
  IServiceManagerProps
> = ({ tmdb, children, history }) => {
  const contextValue = React.useMemo(
    (): IServiceManagerContextValue => ({
      history,
      tmdb,
    }),
    [tmdb, history],
  );

  return (
    <ServiceManagerContext.Provider value={contextValue}>
      {React.Children.only(children)}
    </ServiceManagerContext.Provider>
  );
};

export default ServiceManagerContainer;
