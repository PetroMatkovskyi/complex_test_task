import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard';

import style from './MoviesList.module.css';

export const MoviesList = ({ movies }) => (
  <Box className={style.list}>
    {movies.list.results?.map((i) => (
      <Link to={`/${i.id}`} key={i.id}>
        <MovieCard movie={i} />
      </Link>
    ))}
  </Box>
);
