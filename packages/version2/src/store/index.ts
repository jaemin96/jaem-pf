import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import themeReducer from "./theme";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
