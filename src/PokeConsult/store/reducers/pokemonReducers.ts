import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../types';
import { fetchPokemon } from '../actions/pokemonActions';
import { emptyPokeObject } from '../../helpers/emptyPokeObject';

interface PokemonState {
  isLoading: boolean;
  error: string | null;
  pokemon: Pokemon | undefined;
}

const initialState: PokemonState = {
  isLoading: false,
  error: null,
  pokemon: emptyPokeObject,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<Pokemon>) => {
      state.isLoading = false;
      state.error = null;
      state.pokemon = action.payload;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Unknown error occurred';
      state.pokemon = emptyPokeObject;
    });
  },
});

export default pokemonSlice.reducer;
