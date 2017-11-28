import React from 'react';
import Path from 'path';
import PropTypes from 'prop-types';
import Shortid from 'shortid';

import ProgressCircle from '@/models/ProgressCircle';
import TMDB from '@/constants/TMDB';

const Databox = ({
  detail: {
    backdrop,
    genres,
    language,
    overview,
    poster,
    rate,
    release,
    runtime,
    tagline,
    title,
  },
}) => (
  <div className="data-box picked">
    {
      (backdrop && backdrop.length > 0) && (
        <div
          className="drop-bg"
          style={{
            backgroundImage: `url("${TMDB.path.image + Path.join('/original', backdrop)}")`,
          }}
        />
      )
    }
    <div className="container flex grid-dym">
      <div className="poster">
        {
          (poster && poster.length > 0) && (
            <img className="img" src={TMDB.path.image + Path.join('/w500', poster)} alt={title} />
          )
        }
      </div>
      <div className="detail">
        <div className="title-wrap">
          <ProgressCircle className="rate" rate={rate || 0} />
          <h3 className="title">{title}</h3>
        </div>
        {
          (tagline && tagline.length > 0) && (
            <div className="tagline text-thin">{tagline}</div>
          )
        }
        {
          (overview && overview.length > 0) && (
            <div className="overview">
              <p>{overview}</p>
            </div>
          )
        }
        <div className="others list-beauty">
          <div className="language item">
            <span className="topic">Languages</span>
            <span className="inner">{language}</span>
          </div>
          {
            isNaN(runtime) && (
              <div className="runtime item">
                <span className="topic">Runtime</span>
                <span className="inner">{`${runtime} mins`}</span>
              </div>
            )
          }
          {
            (release && release.length > 0) && (
              <div className="realeased item"><span className="topic">Release Date</span>
                <time className="inner" alt={release}>{release}</time>
              </div>
            )
          }
        </div>
        <div className="genre">
          <ul className="tags">
            {
              genres && genres.map(val => (
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
  detail: PropTypes.objectOf({
    adult: PropTypes.bool,
    backdrop: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    language: PropTypes.string,
    overview: PropTypes.string,
    poster: PropTypes.string,
    rate: PropTypes.number,
    release: PropTypes.string,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Databox;
