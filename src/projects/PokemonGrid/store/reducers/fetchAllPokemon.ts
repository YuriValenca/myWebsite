import { PokemonActionTypes, PokemonState } from "../types";

const initialState: PokemonState = {
  pokemon: [],
  loading: false,
  error: '',
};

const pokemonGridReducer = (state = initialState, action: PokemonActionTypes) => {
  switch (action.type) {
    case 'FETCH_ALL_POKEMON_SUCCESS':
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case 'FETCH_ALL_POKEMON_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'FETCH_ALL_POKEMON_LOADING':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default pokemonGridReducer;
