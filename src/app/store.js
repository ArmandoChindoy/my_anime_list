import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import animeReducer from "../reducers/anime/index";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    anime: animeReducer,
  },
});

export default store;
