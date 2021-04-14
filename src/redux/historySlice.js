import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    paths: [],
  },
  reducers: {
    increment: (state, action) => {
      if (state.paths[0]) {
        const oldPaths = state.paths;
        const newPath = action.payload;

        state.paths = oldPaths.concat(newPath);
      } else {
        state.paths = action.payload;
      }
    },
  },
});

export const { increment } = historySlice.actions;

export default historySlice.reducer;
