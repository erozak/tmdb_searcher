import getYear from 'date-fns/get_year';
import random from 'lodash/random';

import { IDiscoveryMovieQuery } from '../../modules/TMDB';

export default function getDiscoveryParams(): IDiscoveryMovieQuery {
  const lowerBound = -20;
  const upperBound = 0;
  const offset = random(lowerBound, upperBound);
  const nowYear = getYear(new Date());

  return {
    primary_release_year: offset + nowYear,
  };
}
