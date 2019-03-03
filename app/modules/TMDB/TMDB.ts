import { Integer } from '../../globals';
import { appendSearchQueries } from '../../utils/url';

import { IRequest } from '../Request';
import { normalizeMovie } from './adapters/normalizeMovie';
import { normalizeMovieList } from './adapters/normalizeMovieList';
import { SORT_OPTIONS, TMDB_API_HOST, TMDB_API_VERSION } from './constants';
import getMethodRequestFlow from './request/getMethodRequestFlow';

export interface ISearchMovieQuery {
  page?: Integer;
  include_adult?: boolean;
  year?: Integer;
  region?: string;
  primary_release_year?: Integer;
  language?: string;
}

export interface IGetMovieQuery {
  language?: string;
  append_to_response?: string;
}

export interface IDiscoveryMovieQuery {
  language?: string;
  region?: string;
  sort_by?: SORT_OPTIONS;
  include_adult?: boolean;
  include_video?: boolean;
  page?: Integer;
  year?: Integer;
  primary_release_year?: Integer;
  with_cast?: string;
  with_crew?: string;
  with_companies?: string;
  with_keywords?: string;
  without_keywords?: string;
  with_original_language?: string;
  with_release_type?: Integer;
  with_genres?: string;
  without_genres?: string;
  with_people?: string;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  'vote_count.gte'?: Integer;
  'vote_count.lte'?: Integer;
  'vote_average.gte'?: Integer;
  'vote_average.lte'?: Integer;
  'with_runtime.gte'?: Integer;
  'with_runtime.lte'?: Integer;
}

export class TMDB implements IRequest {
  public static version = TMDB_API_VERSION;
  public static host = TMDB_API_HOST;

  constructor(public readonly apiKey: string) {}

  public url(node: string): URL {
    const concatted = `/${TMDB_API_VERSION.toString()}` + node;
    const tmdbApiURL = new URL(concatted, TMDB_API_HOST);

    tmdbApiURL.searchParams.set('api_key', this.apiKey);

    return tmdbApiURL;
  }

  public get<T>(url: URL, config?: RequestInit): Promise<T | null> {
    return fetch(url.toJSON(), {
      ...config,
      method: 'GET',
    }).then(getMethodRequestFlow);
  }

  public searchMovie(search: string, queries?: ISearchMovieQuery) {
    const url = this.url('/search/movie');

    appendSearchQueries(url, queries, {
      page: 1,
      include_adult: true,
    });

    url.searchParams.set('query', search);

    return this.get(url).then(normalizeMovieList);
  }

  public getMovie(id: number, queries?: IGetMovieQuery) {
    const url = this.url(`/movie/${id.toString()}`);

    appendSearchQueries(url, queries);

    return this.get(url).then(normalizeMovie);
  }

  public discoverMovies(queries?: IDiscoveryMovieQuery) {
    const url = this.url('/discover/movie');

    appendSearchQueries(url, queries, {
      page: 1,
      sort_by: SORT_OPTIONS.descendingByPopularity,
      include_adult: true,
      include_video: false,
    });

    return this.get(url).then(normalizeMovieList);
  }
}
