import Path from 'path';
import PropTypes from 'prop-types';
import IPropTypes from 'react-immutable-proptypes';
import Shortid from 'shortid';

import WaterfallItemOfMovie from './WaterfallItemOfMovie';
import TMDB from '../../../constants/TMDB';

const Waterfall = ({
  movies,
  getDetail,
}) => {
  const moviesAmount = movies.size;
  const randomIndex = moviesAmount > 0 ? Math.floor(Math.random() * moviesAmount) : -1;
  const backdrop = randomIndex > -1 ? movies.getIn([randomIndex, 'backdrop']) : '';


  return (
    <div className="waterfall">
      {
        (moviesAmount > 0 && backdrop && backdrop.length > 0) && (
          <div
            className="drop-bg"
            style={{
              backgroundImage: `url("${TMDB.path.image + Path.join('/original', backdrop)}")`,
            }}
          />
        )
      }
      {
        movies.map(movieItem => (
          <div className="item" key={Shortid.generate()}>
            <WaterfallItemOfMovie {...movieItem.toJS()} getDetail={getDetail} />
          </div>
        )).toJS()
      }
    </div>
  );
};

Waterfall.propTypes = {
  movies: IPropTypes.list.isRequired,
  getDetail: PropTypes.func.isRequired,
};

export default Waterfall;
