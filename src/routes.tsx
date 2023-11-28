import { Route, Routes } from 'react-router-dom';
import App from './App';
import PokeConsultAppContent from './projects/PokeConsult/pokeConsult';
import MarvelAppContent from './projects/MarvelSearch/components/AppContent';
import PokemonGridAppContent from './projects/PokemonGrid/components/AppContent';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokeConsult" element={<PokeConsultAppContent />} />
      <Route path="/marvelSearch" element={<MarvelAppContent />} />
      <Route path="/pokemonGrid" element={<PokemonGridAppContent />} />
    </Routes>
  );
}

export default RoutesComponent;
