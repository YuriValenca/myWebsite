import NavigateButton from './Components/NavigateButton';
import './fonts.css';

const App = () => {


  return (
    <>
      <p>Hello World</p>
      <NavigateButton
        path='./PokeConsult/pokeConsult'
        component='PokeConsult'
      />
      <NavigateButton
        path='./FavPokemon/favPokemon'
        component='FavPokemon'
      />
    </>
  )
}

export default App;
