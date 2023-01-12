import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timer: 30,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const { setTimer, decreaseTimer } = timerSlice.actions;

export default timerSlice.reducer;
