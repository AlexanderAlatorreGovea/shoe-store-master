import { UPDATE_FILTER } from './filter-types';

export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});