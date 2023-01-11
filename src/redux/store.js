import { configureStore } from '@reduxjs/toolkit';
import player from './reducers/player';

const store = configureStore({
  reducer: {
    player,
  },
});

export default store;
