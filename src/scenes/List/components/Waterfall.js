import React from 'react';
import Path from 'path';
import IPropTypes from 'react-immutable-proptypes';
import Shortid from 'shortid';

import TMDB from '@/constants/TMDB';

import WaterfallItemOfMovie from './WaterfallItemOfMovie';

const Waterfall = ({
  movies,
}) => {
  const moviesAmount = movies.size;
  const hasMovie = movies.size > 0;
  const randomIndex = hasMovie ? Math.floor(Math.random() * moviesAmount) : -1;
  const backdrop = randomIndex > -1 ? movies.getIn([randomIndex, 'backdrop']) : '';
  const hasBackdrop = backdrop && backdrop.length > 0;

  const movieRender = hasMovie
    ? (
      movies.map(movieItem => (
        <div className="item" key={Shortid.generate()}>
          <WaterfallItemOfMovie {...movieItem.toJS()} />
        </div>
      )).toJS()
    )
    : (
      <p>Oops! Found nothing.</p>
    );

  return (
    <div className="waterfall">
      {
        (hasMovie && hasBackdrop) && (
          <div
            className="drop-bg"
            style={{
              backgroundImage: `url("${TMDB.path.image + Path.join('/original', backdrop)}")`,
            }}
          />
        )
      }
      {movieRender}
    </div>
  );
};

Waterfall.propTypes = {
  movies: IPropTypes.list.isRequired,
};

export default Waterfall;
