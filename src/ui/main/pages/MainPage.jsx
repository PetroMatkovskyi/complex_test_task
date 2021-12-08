import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { MoviePage } from '../../moviePage';
import { Movies } from '../../movies';
import { SearchLine } from '../../shared/search';
import { getTopOfMovies, getMovieInfo, removeActiveId } from '../store';

import style from './MainPage.module.css';

export const MainPage = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeActiveId());
  };
  useEffect(() => {
    dispatch(getTopOfMovies());
  }, []);

  useEffect(() => {
    movies.activeMovieId && dispatch(getMovieInfo(movies.activeMovieId));
  }, [movies.activeMovieId]);

  return (
    <Router>
      <Box className={style.infoPage}>
        {movies.movieDetails && (
          <Link to="/">
            <ArrowBackIcon
              className={style.backArrow}
              fontSize="large"
              onClick={onClick}
            />
          </Link>
        )}
        <SearchLine search={movies.search} />
      </Box>
      {movies.movieDetails ? (
        <MoviePage details={movies.movieDetails} />
      ) : (
        <Movies movies={movies} />
      )}
    </Router>
  );
};
