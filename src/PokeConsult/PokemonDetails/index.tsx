import { useSelector } from 'react-redux';
import { useState } from "react";
import { AnyAction } from "redux";
import { fetchPokemon } from "../store/actions/pokemonActions";
import { RootState, useAppDispatch } from "../store/store";
import {
  DetailsContainer,
  PokemonName,
  PokemonImage,
  PokemonTypes,
  Type,
  PokemonHeight,
  PokemonWeight,
  PokemonInput,
  InputButtonContainer,
  PokeButton,
} from './style';

interface PokemonDetailsTypes {
  name?: string;
  imageUrl?: string;
  types?: string[];
  height?: number;
  weight?: number;
}

const PokemonDetails = ({
  name,
  imageUrl,
  types,
  height,
  weight,
}: PokemonDetailsTypes) => {
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
    <DetailsContainer>
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
      {!error ?
        <>
          <PokemonName>{name}</PokemonName>
          <PokemonImage
            src={imageUrl}
            alt={name}
          />
          <PokemonTypes>{
            types?.map((type: string) => (
              <Type>{type}</Type>
            ))
          }</PokemonTypes>
          <PokemonHeight>Height: {height ? height / 10 : 1}m</PokemonHeight>
          <PokemonWeight>Weight: {weight ? weight / 10 : 1}kg</PokemonWeight>
        </>
        : 'Pokemon not found'}
    </DetailsContainer>
  )

};

export default PokemonDetails;