import { useEffect } from 'react';
import Header from '../PokeConsult/Header';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../PokeConsult/store/actions/pokemonActions';
import { RootState } from '../../store';
import { AnyAction } from 'redux';
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