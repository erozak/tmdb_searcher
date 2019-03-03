import React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

export interface INotFoundPageProps extends RouteComponentProps {

}

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Found nothing</title>
      </Helmet>
      <div>
        NotFoundPage
      </div>
    </>
  );
}

export default NotFoundPage;
