import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAnimeByQuery } from "../../api/animeAPI";

const initialState = {
  anime: {},
  loading: false,
};

export const fetchAnimeByQuery = createAsyncThunk(
  "anime/fetchAnimeByQuery",
  async (query) => {
    const response = await getAnimeByQuery(query);
    // The value we return becomes the `fulfilled` action payload
    console.log("response", response);
    return response;
  }
);

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    getAnime: (state) => {
      state.anime = { name: "Boku no hero", episodes: 120 };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeByQuery.pending, (state) => {
        state.loading = true;
        console.log("pending", state.loading);
      })
      .addCase(fetchAnimeByQuery.fulfilled, (state, action) => {
        state.anime = action.payload.results;
        state.loading = false;
      });
  },
});

export const { getAnime } = animeSlice.actions;

export const selectAnime = (state) => state.anime.anime;
export const selectLoading = (state) => state.anime.loading;

export default animeSlice.reducer;
