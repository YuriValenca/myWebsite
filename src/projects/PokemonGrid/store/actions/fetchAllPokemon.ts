import { Dispatch } from "redux";
import { PokemonActionTypes } from "../types";

export const fetchAllPokemon = () => async (dispatch: Dispatch<PokemonActionTypes>) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1292');
    const data = await response.json();

    const pokemonImages = await Promise.all(data.results.map(async (pokemon: any) => {
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;
      const imageResponse = await fetch(imageUrl);
      const imageData = await imageResponse.blob();
      const image = URL.createObjectURL(imageData);

      return {
        ...pokemon,
        image,
      }
    }));

    dispatch({
      type: 'FETCH_ALL_POKEMON_SUCCESS',
      payload: pokemonImages,
      loading: false,
    });

  } catch (error) {
    console.log(error);
  }
};

