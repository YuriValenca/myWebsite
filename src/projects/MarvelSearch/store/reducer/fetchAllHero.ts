import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchAllHeroes } from "../actions/fetchAllHeroes";
import { Hero } from "../types";

interface HeroListState {
  isLoading: boolean;
  error: string | null;
  heroes: Hero[];
}

const initialState: HeroListState = {
  isLoading: false,
  error: null,
  heroes: [],
};

const heroListSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllHeroes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllHeroes.fulfilled, (state, action: PayloadAction<Hero[]>) => {
      state.isLoading = false;
      state.error = null;
      state.heroes = action.payload;
    });
    builder.addCase(fetchAllHeroes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Unknown error occurred";
      state.heroes = [];
    });
  },
});

export default heroListSlice.reducer;
