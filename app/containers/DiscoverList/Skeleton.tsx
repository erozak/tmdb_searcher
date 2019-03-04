import compact from 'lodash/compact';
import flatten from 'lodash/flatten';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { em } from 'polished';
import React from 'react';
import Helmet from 'react-helmet';

import MovieCard from '../../components/MovieCard';
import MovieLink from '../../components/MovieLink';
import MovieList from '../../components/MovieList';
import CardList from '../../elements/CardList';

import { resolveTMDBImage } from '../../modules/TMDB';
import { IMovie, MovieEntities } from '../../modules/TMDB/schemas/movie';
import { ROUTE_PATH } from '../App/constants';
import { ITEM_SIZE, POSTER_WIDTH } from './constants';
import getTitleFontSizeScale from './getTitleFontSizeScale';

export interface IDiscoverListSkeletonProps {
  pages: Array<Array<IMovie['id']>>;
  movies: MovieEntities;
}

const DiscoverListSkeleton: React.FC<IDiscoverListSkeletonProps> = ({
  pages,
  movies,
}) => {
  return (
    <>
      <Helmet title="Discover Movies" />
      <MovieList list={compact(flatten(pages))}>
        {id => {
          const movie = get(movies, id);

          return movie ? (
            <CardList.Item
              key={id}
              width={em(ITEM_SIZE.width)}
              height={em(ITEM_SIZE.height)}
            >
              <MovieLink to={`${ROUTE_PATH.movie}/${id}`}>
                <MovieCard
                  title={movie.title}
                  poster={
                    movie.poster_path && movie.poster_path.length > 0
                      ? resolveTMDBImage(`w${POSTER_WIDTH}`, movie.poster_path)
                      : ''
                  }
                  posterWidth={em(POSTER_WIDTH)}
                  language={movie.original_language}
                  releaseDate={movie.release_date}
                  titleScale={getTitleFontSizeScale(movie.title.length)}
                />
              </MovieLink>
            </CardList.Item>
          ) : null;
        }}
      </MovieList>
    </>
  );
};

export default React.memo(DiscoverListSkeleton, isEqual);
