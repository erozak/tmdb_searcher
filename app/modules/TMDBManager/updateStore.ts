import assign from 'lodash/assign';
import has from 'lodash/has';
import values from 'lodash/values';
import { INormalizedData } from '../../globals';
import { TMDB_SCHEMA_NAMES } from '../TMDB';
import { ITMDBPagination } from '../TMDB/adapters/normalizeMovieList';
import { IPaginationState, ITMDBEntitiesState } from './store';

export function updatePagination(
  draft: IPaginationState<any>,
  result: ITMDBPagination,
): void {
  draft.currentPage = result.page;
  draft.pages = result.total_pages;
  draft.size = result.total_results;
}

export function updateList<T>(
  draft: IPaginationState<T>,
  response: INormalizedData<{}, T[]> & ITMDBPagination,
): void {
  if (response.page <= 0 || response.page > response.total_pages) {
    return;
  }

  const normalizedPageIndex = response.page - 1;
  draft.result[normalizedPageIndex] = response.result;
}

export function updateEntities(
  draft: ITMDBEntitiesState,
  response: INormalizedData,
): void {
  values(TMDB_SCHEMA_NAMES).forEach(name => {
    if (!has(response.entities, name)) {
      return;
    }

    assign(draft[name], response.entities[name]);
  });
}
