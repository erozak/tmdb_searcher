import React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

export interface IFoundListMatchParams {
  search: string;
}

export interface IFoundListProps extends RouteComponentProps<IFoundListMatchParams> {

};

function FoundList({ match }: IFoundListProps) {
  const { params } = match;

  return (
    <>
      <Helmet>
        <title>{`Find "${params.search}"`}</title>
      </Helmet>
      <div>
        Found List
      </div>
    </>
  );
}

export default FoundList;
