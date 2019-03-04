import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { pluck } from 'rxjs/operators';

import logger from '../../logger';
import {
  IPaginationState,
  ITMDBEntitiesState,
} from '../../modules/TMDBManager/store';
import { empty } from '../../utils/object';
import useObservable from '../../utils/useObservable';
import randomDiscoveryConfig from './randomDiscoveryConfig';

import { ServiceManagerContext } from '../ServiceManager';
import Skeleton from './Skeleton';

import { IMovie } from '../../modules/TMDB';

export interface IDiscoverListProps extends RouteComponentProps {}

const DiscoverListContainer: React.FC<IDiscoverListProps> = () => {
  const discoveryConfig = React.useRef(randomDiscoveryConfig());

  const { tmdb } = React.useContext(ServiceManagerContext);
  const discovery$ = React.useMemo(() => tmdb.state$.pipe(pluck('discovery')), [
    tmdb,
  ]);
  const entities$ = React.useMemo(() => tmdb.state$.pipe(pluck('entities')), [
    tmdb,
  ]);

  const discovery = useObservable<IPaginationState<IMovie['id']>>(discovery$, {
    currentPage: 0,
    pages: 0,
    size: 0,
    result: [],
  });
  const entities = useObservable<ITMDBEntitiesState>(entities$, {
    movies: empty(),
    productionCompanies: empty(),
    genres: empty(),
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

  return <Skeleton pages={discovery.result} movies={entities.movies} />;
};

export default DiscoverListContainer;
