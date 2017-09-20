const TMDB = {
  path: {
    image: 'http://image.tmdb.org/t/p',
    api: 'https://api.themoviedb.org/3',
  },
  key: 'b9109bab34dae32142b6616b29c1f7fb',
  defaultOptions: {
    discover: {
      include_adult: false,
      include_video: false,
      language: 'en-US',
      page: 1,
      sort_by: 'popularity.des',
      'vote_average.gte': 6,
      'vote_count.gte': 100,
      get primary_release_year() {
        return (new Date()).getFullYear() - (1 + Math.floor(Math.random() * 10));
      },
    },
  },
};

export default TMDB;
