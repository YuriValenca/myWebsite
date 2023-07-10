import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { emptyHeroObject } from "../../helpers/emptyHeroObject";
import { Hero } from "../types";
import { fetchHero } from "../actions/fetchHero";

interface HeroState {
  isLoading: boolean;
  error: string | null;
  hero: Hero;
}

const initialState: HeroState = {
  isLoading: false,
  error: null,
  hero: {
    id: 1009368,
    description: "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
    name: "Iron Man",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
      extension: "jpg",
    },
    comics: 2681,
    series: 688,
    stories: 4004,
    events: 31,
  },
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHero.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHero.fulfilled, (state, action: PayloadAction<Hero>) => {
      state.isLoading = false;
      state.error = null;
      state.hero = action.payload;
    });
    builder.addCase(fetchHero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Unknown error occurred";
      state.hero = emptyHeroObject;
    });
  },
});

export default heroSlice.reducer;
