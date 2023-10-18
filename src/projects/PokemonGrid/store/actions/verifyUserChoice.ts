import { Dispatch } from "redux";
import { Pokemon, PokemonActionTypes } from "../types";

export const verifyUserChoice = (userPokemon: Pokemon, gridCellType: string[]) => async (
    dispatch: Dispatch<PokemonActionTypes>
  ) => { 
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon.id}`);
    const data = await response.json();

    const fetchedTypes: string[] = data.types.map((type: any) => type.type.name);
    const userTypes: string[] = gridCellType.map((type: any) => type.toLowerCase());

    fetchedTypes.sort();
    userTypes.sort();

    const isValidChoice = userTypes.length === fetchedTypes.length 
      && userTypes.every((type, index) => type === fetchedTypes[index]);

    if (isValidChoice) {
      dispatch({
        type: "VERIFY_USER_CHOICE_SUCCESS",
        payload: {
          ...userPokemon,
          types: fetchedTypes,
        },
        loading: false,
      });
      return true;
    } else {
      dispatch({
        type: "VERIFY_USER_CHOICE_FAILURE",
        payload: "Tipos inválidos",
        loading: false,
      });
      return false;
    }

  } catch (error: any) {
    dispatch({
      type: "VERIFY_USER_CHOICE_FAILURE",
      payload: error.message,
      loading: false,
    });
  }
};
