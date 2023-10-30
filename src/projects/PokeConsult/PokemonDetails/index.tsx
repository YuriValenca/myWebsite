import { useSelector } from 'react-redux';
import { useState } from "react";
import { AnyAction } from "redux";
import { fetchPokemon } from "../store/actions/pokemonActions";
import { RootState, useAppDispatch } from "../../../store";
import {
  DetailsContainer,
  InputButtonContainer,
  PokemonInput,
  PokeButton,
  PokemonDetailBody,
  PokemonImage,
  DetailsStatsContainer,
  TextContainer,
  PokemonName,
  PokemonStats,
  Stat,
  PokemonTypes,
  Type,
  ErrorContainer,
} from './style';

interface PokeConsultAppContentTypes {
  id?: number;
  name?: string;
  imageUrl?: string;
  types?: string[];
  stats?: number[];
  height?: number;
  weight?: number;
}

const PokeConsultAppContent = ({
  id,
  name,
  imageUrl,
  types,
  stats,
  height,
  weight,
}: PokeConsultAppContentTypes) => {
  const dispatch = useAppDispatch();
  const [pokemonName, setPokemonName] = useState('');

  const isLoading = useSelector((state: RootState) => state.pokemon.isLoading);

  const error = useSelector((state: RootState) => state.pokemon.error);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  }

  const handleSearch = () => {
    dispatch(fetchPokemon(pokemonName.toLowerCase()) as unknown as AnyAction);
  }

  const dualTypePokemon = () => {
    return types && types.length > 1 ? true : false;
  }

  return (
    <>
      {isLoading ?
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}
        >
          <img height="40px" width="40px" src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading" />
        </div>
        :
        <DetailsContainer>
          <InputButtonContainer>
            <PokemonInput
              type="text"
              placeholder="Search for a pokemon"
              value={pokemonName}
              onChange={handleInputChange}
              onSubmit={handleSearch}
              onKeyDown={(event: any) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <PokeButton onClick={handleSearch}>Search</PokeButton>
          </InputButtonContainer>
          {!error ?
            <PokemonDetailBody>
              <PokemonImage
                src={imageUrl}
                alt={name}
              />
              <DetailsStatsContainer>
                <TextContainer>
                  <PokemonName>{name && (name?.charAt(0).toUpperCase() + name?.slice(1))}, #{id}</PokemonName>
                  <PokemonStats>
                    <Stat>
                      HP: {stats ? stats[0] : 1}
                    </Stat>
                    <Stat>
                      Attack: {stats ? stats[1] : 1}
                    </Stat>
                    <Stat>
                      Defense: {stats ? stats[2] : 1}
                    </Stat>
                    <Stat>
                      SpAtk: {stats ? stats[3] : 1}
                    </Stat>
                    <Stat>
                      SpDef: {stats ? stats[4] : 1}
                    </Stat>
                    <Stat>
                      Speed: {stats ? stats[5] : 1}
                    </Stat>
                  </PokemonStats>
                  Height: {height ? height / 10 : 1}m
                  <br />
                  Weight: {weight ? weight / 10 : 1}kg
                </TextContainer>
                <PokemonTypes
                  dualType={dualTypePokemon()}
                >{
                    types?.map((type: string) => (
                      <Type
                        type={type.charAt(0).toUpperCase() + type?.slice(1)}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Type>
                    ))
                  }</PokemonTypes>
              </DetailsStatsContainer>
            </PokemonDetailBody>
            :
            <ErrorContainer>
              <p>Sorry :&#40; we couldn't find any results that matches your input</p>
              <img src="https://media.tenor.com/KJzbxvVG5qwAAAAC/detective-pikachu-investigation.gif" alt="error" />
            </ErrorContainer>
          }
        </DetailsContainer>
      }
    </>
  )

};

export default PokeConsultAppContent;