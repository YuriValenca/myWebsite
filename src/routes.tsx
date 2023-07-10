import { Route, Routes } from 'react-router-dom';
import App from './App';
import PokeConsult from './projects/PokeConsult/pokeConsult';
import MarvelSearch from './projects/MarvelSearch/components/AppContent';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={App()} />
      <Route path="/pokeConsult" element={PokeConsult()} />
      <Route path="/marvelSearch" element={MarvelSearch()} />
    </Routes>
  );
}

export default RoutesComponent;
