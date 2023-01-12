import { configureStore } from '@reduxjs/toolkit';
import player from './reducers/player';
import timer from './reducers/timer';

const store = configureStore({
  reducer: {
    player,
    timer,
  },
});

export default store;
