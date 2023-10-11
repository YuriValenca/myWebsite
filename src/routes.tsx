import { Route, Routes } from 'react-router-dom';
import App from './App';
import PokeConsult from './projects/PokeConsult/pokeConsult';
import MarvelSearch from './projects/MarvelSearch/components/AppContent';
import PokemonGrid from './projects/PokemonGrid/components/AppContent';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={App()} />
      <Route path="/pokeConsult" element={PokeConsult()} />
      <Route path="/marvelSearch" element={MarvelSearch()} />
      <Route path="/pokemonGrid" element={PokemonGrid()} />
    </Routes>
  );
}

export default RoutesComponent;
