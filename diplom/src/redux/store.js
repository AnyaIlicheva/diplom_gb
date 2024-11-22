import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "../slices/habitSlice";

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
