"use client";

import { createSlice } from "@reduxjs/toolkit";

type Mode = "dark" | "bright" | "default";

export interface ThemeState {
  mode: Mode;
}

export const themeInitialState: ThemeState = {
  mode: "default",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
