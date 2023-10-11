import { useNavigate } from "react-router-dom";
import './fonts.css';

const App = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(`./${path.toLowerCase()}`);
    return;
  }

  return (
    <>
      <p>Hello World</p>
      <button onClick={() => handleClick('PokeConsult')}>PokeConsult</button>
      <button onClick={() => handleClick('MarvelSearch')}>Marvel Search</button>
      <button onClick={() => handleClick('PokemonGrid')}>Pokemon Grid</button>
    </>
  )
}

export default App;
