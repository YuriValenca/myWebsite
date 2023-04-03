import { useState } from "react";
import { AnyAction } from "redux";
import { fetchPokemon } from "../store/actions/pokemonActions";
import { RootState, useAppDispatch } from "../store/store";
import {
  HeaderContainer,
  GoBackButton,
  PokemonLogoImage,
  PokemonInput,
  InputButtonContainer,
  PokeButton,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useAppDispatch();
  const [pokemonName, setPokemonName] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  const error = useSelector((state: RootState) => state.pokemon.error);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  }

  const handleSearch = () => {
    dispatch(fetchPokemon(pokemonName) as unknown as AnyAction);
  }

  return (
    <HeaderContainer>
      <GoBackButton onClick={handleClick}>Go back</GoBackButton>
      <InputButtonContainer>
        <PokemonInput
          type="text"
          placeholder="Search for a pokemon"
          value={pokemonName}
          onChange={handleInputChange}
          onSubmit={handleSearch}
        />
        <PokeButton onClick={handleSearch}>Search</PokeButton>
      </InputButtonContainer>
      {error && <p>Oops, something went wrong... Try checking your Pokemon spelling!</p>}
      <PokemonLogoImage />
    </HeaderContainer>
  )
}

export default Header;
