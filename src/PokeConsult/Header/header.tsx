import { useState } from "react";
import { AnyAction } from "redux";
import { fetchPokemon } from "../store/actions/pokemonActions";
import { RootState, useAppDispatch } from "../store/store";
import { HeaderContainer, PokemonLogoImage, PokemonInput } from "./style";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useAppDispatch();
  const [pokemonName, setPokemonName] = useState('');

  const error = useSelector((state: RootState) => state.pokemon.error);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  }

  const handleSearch = () => {
    dispatch(fetchPokemon(pokemonName) as unknown as AnyAction);
  }

  return (
    <HeaderContainer>
      <PokemonLogoImage />
      <PokemonInput
        type="text"
        placeholder="Search for a pokemon"
        value={pokemonName}
        onChange={handleInputChange}
      />
      {error && <p>Oops, something went wrong... Try checking your Pokemon spelling!</p>}
      <button onClick={handleSearch}>Search</button>
    </HeaderContainer>
  )
}

export default Header;
