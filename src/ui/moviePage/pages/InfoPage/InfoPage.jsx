import { Box, Typography } from '@mui/material';

import style from './InfoPage.module.css';

export const InfoPage = ({ details }) => (
  <div className={style.container}>
    {/* {console.log(details)} */}
    <Box className={style.posterContainer}>
      <img
        className={style.poster}
        src={`https://image.tmdb.org/t/p/w300/${
          details.poster_path || details.backdrop_path
        }`}
        alt="poster"
      />
    </Box>
    <Box className={style.content}>
      <Box className={style.title}>
        <Typography align="center" variant="h2">
          {details.title}
          <Typography variant="span" className={style.year}>
            ({details.release_date.match(/^\d{4}/)})
          </Typography>
        </Typography>
        <Typography align="center" variant="h5" className={style.tagline}>
          {details.tagline}
        </Typography>
      </Box>
      <Typography align="left" variant="p" className={style.overview}>
        {details.overview}
      </Typography>
      <Box className={style.additionInfo}>
        <Box>
          <Typography variant="h6">
            {details.genres?.map((i) => (
              <Typography variant="span" className={style.genreItem}>
                {i.name}{' '}
              </Typography>
            ))}
          </Typography>
        </Box>
        <Box>
          <Typography align="left" variant="h6">
            Budget: {details.budget}&#36;
          </Typography>
          <Typography align="left" variant="p"></Typography>
        </Box>
      </Box>
    </Box>
  </div>
);
