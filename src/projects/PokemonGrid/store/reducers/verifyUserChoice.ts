import { PokemonActionTypes, PokemonState } from "../types";

export const initialState: PokemonState = {
  pokemon: [],
  loading: false,
  error: '',
};

export const verifyUserChoiceReducer = (state = initialState, action: PokemonActionTypes) => {
  switch (action.type) {
    case 'VERIFY_USER_CHOICE_SUCCESS':
      return {
        ...state,
        pokemonType: action.type,
        loading: false,
      };
    case 'VERIFY_USER_CHOICE_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'VERIFY_USER_CHOICE_LOADING':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
