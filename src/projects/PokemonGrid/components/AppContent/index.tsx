import { useEffect } from "react";
import Header from "../../../PokeConsult/Header";
import Grid from "../Grid";
import { useSelector } from "react-redux";
import { fetchAllPokemon } from "../../store/actions/fetchAllPokemon";
import { RootState, useAppDispatch } from "../../../../store";
import {
  Title,
  PokemonGridContainer,

} from "./style";
import { AnyAction } from "redux";

const PokemonGrid = () => {
  const dispatch = useAppDispatch();
  const pokemonData = useSelector((state: RootState) => state.pokemonGrid.pokemon);

  useEffect(() => {
    dispatch(fetchAllPokemon() as unknown as AnyAction);
  }, []);

  return (
    <>
      <Header
        text="PokemonGrid"
      />
      <PokemonGridContainer>
        <Title>Today's puzzle</Title>
        <Grid
          pokemonData={pokemonData}
        />
      </PokemonGridContainer>
    </>
  );

};

export default PokemonGrid;
