import Path from 'path';
import PropTypes from 'prop-types';

import TMDB from '../../../constants/TMDB';

const WaterfallItemOfMovie = ({
  id,
  poster,
  title,
  adult,
  language,
  release,
  getDetail,
}) => (
  <div className="data-box card">
    <div className="flex">
      <div className="poster">
        {
          (poster && poster.length > 0) && (
            <img className="img" src={TMDB.path.image + Path.join('/w185', poster)} alt={title} />
          )
        }
      </div>
      <div className="detail">
        <div className="title-wrap">
          <div className="title">{title}</div>
        </div>
        <div className="others">
          {
            adult && (
              <div className="item">
                <i className="fa fa-exclamation-triangle" />
                <span>Explicit</span>
              </div>
            )
          }
          <div className="runtime item">
            <span className="topic">Language</span>
            <span className="inner">{language}</span>
          </div>
          {
            (release && release.length > 0) && (
              <div className="realeased item">
                <span className="topic">Release Date</span>
                <time className="inner" alt={release}>{release}</time>
              </div>
            )
          }
        </div>
        <div>
          <a href="#" onClick={getDetail(id)}>See More</a>
        </div>
      </div>
    </div>
  </div>
);

WaterfallItemOfMovie.propTypes = {
  id: PropTypes.number.isRequired,
  adult: PropTypes.bool.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  release: PropTypes.string,
  getDetail: PropTypes.func.isRequired,
};

WaterfallItemOfMovie.defaultProps = {
  poster: '',
  release: '',
};

export default WaterfallItemOfMovie;
