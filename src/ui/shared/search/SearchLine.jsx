import { useEffect } from 'react';
import { TextField, Stack, Autocomplete, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { searchRequest, setActiveId, setSearchString } from '../../main/store';

export const SearchLine = ({ search }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const str = e.target.value.trim();
    str && search.searchStr !== str && dispatch(setSearchString(str));
  };

  const onSetId = (e) => {
    dispatch(setActiveId(e.target.value));
  };

  useEffect(() => {
    search.searchStr && dispatch(searchRequest(search.searchStr));
  }, [search.searchStr]);

  return (
    <Stack spacing={1} sx={{ width: '100%', margin: 1 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        noOptionsText="No movies"
        options={search.respond.results}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => (
          <Box
            component="li"
            {...{ ...props, key: option.id, value: option.id }}
            onClick={onSetId}
          >
            {option.title}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            onChange={onChange}
            {...params}
            label="Search movie"
            InputProps={{
              ...params.InputProps,
              value: search.searchStr,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
};
