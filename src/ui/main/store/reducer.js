import * as types from './types';

const initialState = {
  activeMovieId: null,
  movieDetails: null,
  search: {
    searchStr: '',
    respond: { results: [] },
  },
  list: {},
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TOP_MOVIES:
      return { ...state, list: { ...state.list, ...action.payload } };
    case types.GET_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload };
    case types.SET_ACTIVE_ID:
      return { ...state, activeMovieId: action.payload };
    case types.REMOVE_ACTIVE_ID:
      return { ...state, activeMovieId: null, movieDetails: null };
    case types.SET_SEARCH_STRING:
      return { ...state, search: { ...state.search, searchStr: action.payload } };
    case types.SEARCH_REQUEST:
      return { ...state, search: { ...state.search, respond: action.payload } };
    default:
      return state;
  }
};
