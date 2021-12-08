import { combineReducers } from 'redux';
import { moviesReducer } from '../../ui/main/store';

export const rootReducer = combineReducers({ movies: moviesReducer });
