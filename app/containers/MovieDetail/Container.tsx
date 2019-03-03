import React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

export interface IMovieDetailMatchParams {
  id: string;
}

export interface IMovieDetailProps extends RouteComponentProps<IMovieDetailMatchParams> {

};

function MovieDetail({ match }: IMovieDetailProps) {
  const { params } = match;

  return (
    <>
      <Helmet>
        <title>{params.id}</title>
      </Helmet>
      <div>
        MovieDetail
      </div>
    </>
  );
}

export default MovieDetail;
