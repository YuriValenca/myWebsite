import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('./PokeConsult/pokeConsult');
  }

  return (
    <>
      <p>Hello World</p>
      <button onClick={handleClick}>PokeConsult</button>
    </>
  )
}

export default App;
