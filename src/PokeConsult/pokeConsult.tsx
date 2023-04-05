import { useEffect } from 'react';
import Header from './Header';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../PokeConsult/store/actions/pokemonActions';
import { RootState } from './store/store';
import { AnyAction } from 'redux';
import PokemonDetails from './PokemonDetails';

const PokeConsult = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state: RootState) => state.pokemon.pokemon);
  const isLoading = useSelector((state: RootState) => state.pokemon.isLoading);

  useEffect(() => {
    dispatch(fetchPokemon('bulbasaur') as unknown as AnyAction);
  }, [dispatch]);

  return (
    <>
      <Header />
      <PokemonDetails
        name={pokemon?.name}
        imageUrl={pokemon?.imageUrl}
        types={pokemon?.types}
        height={pokemon?.height}
        weight={pokemon?.weight}
      />
      <Footer />
    </>
  )

};

export default PokeConsult;