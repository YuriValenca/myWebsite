export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonState {
  pokemon: Pokemon[];
  loading: boolean;
  error: string;
}

export const FETCH_ALL_POKEMON_SUCCESS = 'FETCH_ALL_POKEMON_SUCCESS';
export const FETCH_ALL_POKEMON_FAILURE = 'FETCH_ALL_POKEMON_FAILURE';
export const FETCH_ALL_POKEMON_LOADING = 'FETCH_ALL_POKEMON_LOADING';

export const VERIFY_USER_CHOICE_SUCCESS = 'VERIFY_USER_CHOICE_SUCCESS';
export const VERIFY_USER_CHOICE_FAILURE = 'VERIFY_USER_CHOICE_FAILURE';
export const VERIFY_USER_CHOICE_LOADING = 'VERIFY_USER_CHOICE_LOADING';

interface FetchAllPokemonSuccessAction {
  type: typeof FETCH_ALL_POKEMON_SUCCESS;
  payload: Pokemon[];
  loading: boolean;
}

interface FetchAllPokemonFailureAction {
  type: typeof FETCH_ALL_POKEMON_FAILURE;
  payload: string;
  loading: boolean;
}

interface FetchAllPokemonLoadingAction {
  type: typeof FETCH_ALL_POKEMON_LOADING;
  loading: boolean;
}

interface VerifyUserChoiceSuccessAction {
  type: typeof VERIFY_USER_CHOICE_SUCCESS;
  payload: Pokemon;
  loading: boolean;
}

interface VerifyUserChoiceFailureAction {
  type: typeof VERIFY_USER_CHOICE_FAILURE;
  payload: string;
  loading: boolean;
}

interface VerifyUserChoiceLoadingAction {
  type: typeof VERIFY_USER_CHOICE_LOADING;
  loading: boolean;
}

export type PokemonActionTypes = 
  FetchAllPokemonSuccessAction |
  FetchAllPokemonFailureAction |
  FetchAllPokemonLoadingAction |
  VerifyUserChoiceSuccessAction |
  VerifyUserChoiceFailureAction |
  VerifyUserChoiceLoadingAction;
