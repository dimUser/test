import catalogReducer, {
  ICatalogState
} from './catalogSlice';

describe('counter reducer', () => {
  const initialState: ICatalogState = {
    movies: {
      page: 0,
      results: [],
      total_results: 0,
      total_pages: 0
    },
    tv: {
      page: 0,
      results: [],
      total_results: 0,
      total_pages: 0
    },
    catalogList: [],
    status: {
      movies: 'idle',
      tv: 'idle',
      search: 'idle'
    }
  };
  it('should handle initial state', () => {
    expect(catalogReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  })
});