import Path from 'path';
import PropTypes from 'prop-types';
import Shortid from 'shortid';

import ProgressCircle from '../../../models/ProgressCircle';
import TMDB from '../../../constants/TMDB';

const Databox = ({
  title,
  backdrop,
  poster,
  rate,
  tagline,
  overview,
  language,
  runtime,
  release,
  genres,
}) => (
  <div className="data-box picked">
    <div
      className="drop-bg"
      style={{
        backgroundImage: `url("${TMDB.path.image + Path.join('/original', backdrop)}")`,
      }}
    />
    <div className="container flex grid-dym">
      <div className="poster">
        <img className="img" src={TMDB.path.image + Path.join('/w500', poster)} alt={title} />
      </div>
      <div className="detail">
        <div className="title-wrap">
          <h3 className="title">{title}</h3>
          <ProgressCircle className="rate" rate={rate} />
        </div>
        <div className="tagline text-thin">{tagline}</div>
        <div className="overview">
          <p>{overview}</p>
        </div>
        <div className="others list-beauty">
          <div className="language item">
            <span className="topic">Languages</span>
            <span className="inner">{language}</span>
          </div>
          <div className="runtime item">
            <span className="topic">Runtime</span>
            <span className="inner">{`${runtime} mins`}</span>
          </div>
          <div className="realeased item"><span className="topic">Release Date</span>
            <time className="inner" alt={release}>{release}</time>
          </div>
        </div>
        <div className="genre">
          <ul className="tags">
            {
              genres.map(val => (
                <li className="item" key={Shortid.generate()}>{val}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Databox.propTypes = {
  title: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  release: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Databox;
