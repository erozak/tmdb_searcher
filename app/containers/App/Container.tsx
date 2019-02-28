import React from 'react';

import tmdbLogoImage from '../../images/tmdb_logo_rectangle_green.svg';

function AppContainer() {
  return (
    <div>
      <img src={tmdbLogoImage} alt="tmdb logo"/>
      Hello World!
    </div>
  )
}

export default AppContainer;
