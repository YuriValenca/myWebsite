import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PokeConsult from './PokeConsult/pokeConsult';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={App()} />
      <Route path="PokeConsult/pokeConsult" element={PokeConsult()} />
    </Routes>
  );
}

export default RoutesComponent;
