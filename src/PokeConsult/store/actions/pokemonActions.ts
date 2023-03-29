import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pokemon } from '../types';

export const fetchPokemon = createAsyncThunk<Pokemon>('pokemon/fetchPokemon', async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const pokemon: Pokemon = {
    id: response.data.id,
    name: response.data.name,
    imageUrl: response.data.sprites.other['official-artwork'].front_default,
    types: response.data.types.map((type: { type: { name: string } }) => type.type.name),
    height: response.data.height,
    weight: response.data.weight
  };
  return pokemon;
});
