import React from 'react';

import { ServiceManagerContext, IServiceManagerContextValue } from './context';
import { TMDB } from 'modules/TMDB';

export interface IServiceManagerProps {
  tmdbApiKey: string;
  children: React.ReactChild;
};

type Props = IServiceManagerProps;

function ServiceManagerContainer({ tmdbApiKey, children }: Props) {
  const contextValue = React.useMemo((): IServiceManagerContextValue => ({
    tmdb: new TMDB(tmdbApiKey),
  }), [tmdbApiKey]);

  return (
    <ServiceManagerContext.Provider value={contextValue}>
      {React.Children.only(children)}
    </ServiceManagerContext.Provider>
  );
}

export default ServiceManagerContainer;
