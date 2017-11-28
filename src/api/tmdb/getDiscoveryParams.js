function getDiscoveryParams() {
  const yearRange = 10;
  const nowYear = (new Date()).getFullYear();
  const randomYear = nowYear - (1 + Math.floor(Math.random() * yearRange));

  return {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.des',
    'vote_average.gte': 6,
    'vote_count.gte': 100,
    primary_release_year: randomYear,
  };
}

export default getDiscoveryParams;
