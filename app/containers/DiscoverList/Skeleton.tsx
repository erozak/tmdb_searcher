import isEqual from 'lodash/isEqual';
import React from 'react';
import Helmet from 'react-helmet';

export interface IDiscoverListSkeletonProps {
  size: number;
}

const DiscoverListSkeleton: React.FunctionComponent<
  IDiscoverListSkeletonProps
> = ({ size }) => {
  return (
    <>
      <Helmet title="Discover Movies" />
      <div>Discover: {size}</div>
    </>
  );
};

export default React.memo(DiscoverListSkeleton, isEqual);
