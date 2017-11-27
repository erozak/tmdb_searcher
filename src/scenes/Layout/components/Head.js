import React from 'react';
import IconSearch from 'react-icons/lib/fa/search';

import tmdbLogo from '../images';
import DiscoverButton from '../containers/discoverButton';
import SearchButton from '../containers/searchButton';
import QueryInput from '../containers/queryInput';

const Head = () => (
  <header className="head">
    <div className="navbar">
      <div className="logo img-wrap"><img className="img" src={tmdbLogo} alt="TMDB Logo" /></div>
      <nav className="nav">
        <DiscoverButton className="nav-item" />
      </nav>
      <div className="input-group search-wrap">
        <label className="lb" htmlFor="search">
          <IconSearch />
        </label>
        <div className="inp-wrap">
          <QueryInput
            className="inp"
            id="search"
            placeholder="Movie, TV Series ..."
          />
        </div>
        <SearchButton className="btn btn-exec" />
      </div>
    </div>
  </header>
);

export default Head;
