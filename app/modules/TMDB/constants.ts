export const TMDB_API_HOST = 'https://api.themoviedb.org';

export const TMDB_API_VERSION = 3;

export enum SORT_OPTIONS {
  ascendingByPopularity = 'popularity.asc',
  descendingByPopularity = 'popularity.desc',
  ascendingByReleaseDate = 'release_date.asc',
  descendingByReleaseDate = 'release_date.desc',
  ascendingByRevenue = 'revenue.asc',
  descendingByRevenue = 'revenue.desc',
  ascendingByPrimaryReleaseDate = 'primary_release_date.asc',
  descendingByPrimaryReleaseDate = 'primary_release_date.desc',
  ascendingByOriginalTitle = 'original_title.asc',
  descendingByOriginalTitle = 'original_title.desc',
  ascendingByVoteAvarage = 'vote_average.asc',
  descendingByVoteAvarage = 'vote_average.desc',
  ascendingByVoteCount = 'vote_count.asc',
  descendingByVoteCount = 'vote_count.desc',
}
