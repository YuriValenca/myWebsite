import { useEffect } from 'react';
import Header from './Header/header';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../PokeConsult/store/actions/pokemonActions';
import { RootState } from './store/store';
import { AnyAction } from 'redux';

const PokeConsult = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state: RootState) => state.pokemon.pokemon);
  const isLoading = useSelector((state: RootState) => state.pokemon.isLoading);
  const error = useSelector((state: RootState) => state.pokemon.error);

  useEffect(() => {
    dispatch(fetchPokemon() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <>
      <Header />
      <hr />
      <div>
        <h3>{pokemon?.name}</h3>
        <img src={pokemon?.imageUrl} alt={pokemon?.name} />
        <ul>
          {pokemon?.types.map((type: string) => (
            <li>{type}</li>
          ))}
        </ul>
        <div>Height: {pokemon?.height}</div>
        <div>Weight: {pokemon?.weight}</div>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <hr />
      <Footer />
    </>
  )

};

export default PokeConsult;