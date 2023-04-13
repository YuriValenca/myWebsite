import { Route, Routes } from 'react-router-dom';
import App from './App';
import PokeConsult from './PokeConsult/pokeConsult';
import FavPokemon from './FavPokemon/favPokemon';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={App()} />
      <Route path="PokeConsult/pokeConsult" element={PokeConsult()} />
      <Route path="FavPokemon/favPokemon" element={FavPokemon()} />
    </Routes>
  );
}

export default RoutesComponent;
