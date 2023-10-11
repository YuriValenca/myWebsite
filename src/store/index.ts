import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import pokemonReducer from '../projects/PokeConsult/store/reducers/pokemonReducers';
import heroReducer from '../projects/MarvelSearch/store/reducer/fetchHero';
import heroListReducer from '../projects/MarvelSearch/store/reducer/fetchAllHero';
import { useDispatch } from 'react-redux';
import pokemonGridReducer from '../projects/PokemonGrid/store/reducers/fetchAllPokemon';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  hero: heroReducer,
  heroList: heroListReducer,
  pokemonGrid: pokemonGridReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
