import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Storage } from '../Storage';
import {
  IDiscoveryMovieQuery,
  IGetMovieQuery,
  IMovie,
  ISearchMovieQuery,
  TMDB,
} from '../TMDB';
import { ITMDBStore } from './store';
import { updateEntities, updateList, updatePagination } from './updateStore';

export class TMDBManager extends Storage<ITMDBStore> {
  private readonly tmdb: TMDB;

  constructor(public readonly apiKey: string, initialState: ITMDBStore) {
    super(initialState);

    this.tmdb = new TMDB(apiKey);
  }

  public searchMovie(query: string, config?: ISearchMovieQuery) {
    super.setState(draft => {
      draft.search.query = query;
    });

    return from(this.tmdb.searchMovie(query, config)).pipe(
      tap(response => {
        if (!response) {
          return;
        }

        super.setState(draft => {
          updatePagination(draft.search, response);
          updateList(draft.search, response);
          updateEntities(draft.entities, response);
        });
      }),
    );
  }

  public discoverMovies(config?: IDiscoveryMovieQuery) {
    return from(this.tmdb.discoverMovies(config)).pipe(
      tap(response => {
        if (!response) {
          return;
        }

        super.setState(draft => {
          updatePagination(draft.discovery, response);
          updateList(draft.discovery, response);
          updateEntities(draft.entities, response);
        });
      }),
    );
  }

  public getMovie(id: IMovie['id'], config?: IGetMovieQuery) {
    return from(this.tmdb.getMovie(id, config)).pipe(
      tap(response => {
        if (!response) {
          return;
        }

        super.setState(draft => {
          updateEntities(draft.entities, response);
        });
      }),
    );
  }
}
