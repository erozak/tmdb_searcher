import React from 'react';
import Helmet from 'react-helmet';

import GlobalStyle from './GlobalStyle';
import Skeleton from './Skeleton';

import { WEBSITE_TITLE } from './constants';

function AppContainer() {
  return (
    <>
      <Helmet
        defaultTitle={WEBSITE_TITLE}
        titleTemplate={`${WEBSITE_TITLE} - %s`}
      />
      <Skeleton />
      <GlobalStyle />
    </>
  );
}

export default AppContainer;
