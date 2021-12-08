import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';

import { setActiveId } from 'ui/main/store';

import style from './MovieCard.module.css';

export const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const toInfoPage = () => {
    dispatch(setActiveId(movie.id));
  };
  return (
    <Card className={style.card} onClick={toInfoPage}>
      <CardActionArea>
        <CardMedia
          className={style.img}
          component="img"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Typography variant="p" color="text.secondary">
          {movie.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};
