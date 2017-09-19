import Path from 'path';
import PropTypes from 'prop-types';
import IPropTypes from 'react-immutable-proptypes';
import Shortid from 'shortid';

import WaterfallItemOfMovie from './WaterfallItemOfMovie';
import TMDB from '../../../constants/TMDB';

const Waterfall = ({
  backdrop,
  movies,
  getDetail,
}) => (
  <div className="waterfall">
    {
      backdrop.length && (
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

Waterfall.propTypes = {
  backdrop: PropTypes.string.isRequired,
  movies: IPropTypes.list.isRequired,
  getDetail: PropTypes.func.isRequired,
};

export default Waterfall;
