import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  score: 0,
};

const userSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.score = action.payload.score;
    },
  },
});

export const { setPlayers } = userSlice.actions;

export default userSlice.reducer;
