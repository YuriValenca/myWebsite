import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from './store/actions/pokeConsult';
import { RootState } from './store/store';
import { AnyAction } from 'redux';
import Header from './Header';
import Footer from '../Footer';
import PokemonDetails from './PokemonDetails';

const PokeConsult = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state: RootState) => state.pokemon.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon('bulbasaur') as unknown as AnyAction);
  }, [dispatch]);

  return (
    <>
      <Header />
      <PokemonDetails
        id={pokemon?.id}
        name={pokemon?.name}
        imageUrl={pokemon?.imageUrl}
        types={pokemon?.types}
        stats={pokemon?.stats}
        height={pokemon?.height}
        weight={pokemon?.weight}
      />
      <Footer />
    </>
  )

};

export default PokeConsult;