import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDiscover, TDiscoverResults, fetchMovies, fetchTV, search } from './catalogApi';

type TStatus = 'idle' | 'loading' | 'failed';

export interface ICatalogState {
  movies: IDiscover
	tv: IDiscover
  catalogList: TDiscoverResults[]
  status: {
		movies: TStatus
		tv: TStatus
    search: TStatus
	}		
}

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

export const getMoviesAsync = createAsyncThunk(
  'movies/fetchMovies',
  async (_, {dispatch}) => {
    const response = await fetchMovies();
    dispatch(initCatalogList(response.results))
    return response;
  }
);

export const getTVAsync = createAsyncThunk(
  'tv/fetchTV',
  async (_, {dispatch}) => {
    const response = await fetchTV();
    dispatch(initCatalogList(response.results))
    return response;
  }
);

export const searchAsync = createAsyncThunk(
  'search/useSearch',
  async (title: string, {dispatch}) => {
    const response = await search(title)
      dispatch(updateCatalogList(response.results)
    );
    return response;
  }
);

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    initCatalogList(state, action){
      state.catalogList = [...state.catalogList, ...action.payload]
    },
    updateCatalogList(state, action) {
      state.catalogList = action.payload
    },
    resetCatalogList(state){
      state.catalogList = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.status.movies = 'loading';
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.status.movies = 'idle';
        state.movies = action.payload;
      })
			.addCase(getTVAsync.pending, (state) => {
        state.status.tv = 'loading';
      })
      .addCase(getTVAsync.fulfilled, (state, action) => {
        state.status.tv = 'idle';
        state.tv = action.payload;
      })
      .addCase(searchAsync.pending, (state) => {
        state.status.search = 'loading';
      })
      .addCase(searchAsync.fulfilled, (state) => {
        state.status.search = 'idle';
      });
  },
});

export const { updateCatalogList, initCatalogList, resetCatalogList } = catalogSlice.actions;

export default catalogSlice.reducer;
