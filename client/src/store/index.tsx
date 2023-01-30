// src/store/index.ts
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import user from './slices/user';
import player from './slices/player';
import artist from './slices/artist';

const rootReducer = combineReducers({
  user,
  player,
  artist,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;