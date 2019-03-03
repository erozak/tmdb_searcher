import React from 'react';

import FindBar from '../../components/FindBar';
import { ROUTE_PATH } from '../App/constants';
import { ServiceManagerContext } from '../ServiceManager';

const FindMovieBarContainer: React.FunctionComponent = () => {
  const { history } = React.useContext(ServiceManagerContext);
  const toSearchPage = React.useCallback(
    (search: string) => {
      history.push(`${ROUTE_PATH.find}/${search}`);
    },
    [history],
  );

  return <FindBar searchMovie={toSearchPage} />;
};

export default FindMovieBarContainer;
