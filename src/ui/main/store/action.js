import * as types from './types';

export const getTopOfMovies = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    );
    const json = await response.json();
    dispatch({ type: types.GET_TOP_MOVIES, payload: json });
  };
};

export const getMovieInfo = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    const json = await response.json();
    dispatch({ type: types.GET_MOVIE_DETAILS, payload: json });
  };
};

export const searchRequest = (str) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${str}&page=1&include_adult=false`
    );
    const json = await response.json();
    dispatch({ type: types.SEARCH_REQUEST, payload: json });
  };
};

export const setActiveId = (id) => ({ type: types.SET_ACTIVE_ID, payload: id });

export const removeActiveId = () => ({ type: types.REMOVE_ACTIVE_ID });

export const setSearchString = (str) => ({ type: types.SET_SEARCH_STRING, payload: str });
