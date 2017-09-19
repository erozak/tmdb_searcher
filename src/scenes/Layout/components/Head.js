import tmdbLogo from '../images';

const Head = () => (
  <header className="head">
    <div className="navbar">
      <div className="logo img-wrap"><img className="img" src={tmdbLogo} alt="TMDB Logo" /></div>
      <nav className="nav"><a className="nav-item" href="discover.html" alt="discover">Discover</a></nav>
      <div className="input-group search-wrap">
        <label className="lb" htmlFor="search">
          <i className="fa fa-search" />
        </label>
        <div className="inp-wrap">
          <input className="inp" id="search" type="text" placeholder="Movie, TV Series ..." />
        </div>
        <button className="btn btn-exec" type="button">Search</button>
      </div>
    </div>
  </header>
);

export default Head;
