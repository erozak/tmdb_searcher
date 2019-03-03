import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { pluck } from 'rxjs/operators';

import logger from '../../logger';
import useObservable from '../../utils/useObservable';

import { ServiceManagerContext } from '../ServiceManager';
import Skeleton from './Skeleton';

import randomDiscoveryConfig from './randomDiscoveryConfig';

export interface IDiscoverListProps extends RouteComponentProps {}

const DiscoverListContainer: React.FunctionComponent<
  IDiscoverListProps
> = () => {
  const discoveryConfig = React.useRef(randomDiscoveryConfig());

  const { tmdb } = React.useContext(ServiceManagerContext);
  const movies = useObservable(tmdb.state$.pipe(pluck('discovery')), {
    currentPage: 0,
    pages: 0,
    size: 0,
    result: [],
  });

  React.useEffect(() => {
    const subscription = tmdb
      .discoverMovies(discoveryConfig.current)
      .subscribe({
        next() {
          logger.info('Discovery:', discoveryConfig.current);
        },
        error(error: any) {
          logger.error('Discovery failed:', error);
        },
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [tmdb]);
  logger.info('>>>', movies);

  return <Skeleton size={movies.size} />;
};

export default DiscoverListContainer;
