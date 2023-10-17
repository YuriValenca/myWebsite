import { useEffect } from "react";
import Header from "../../../../components/Header";
import Grid from "../Grid";
import { useSelector } from "react-redux";
import { fetchAllPokemon } from "../../store/actions/fetchAllPokemon";
import { RootState, useAppDispatch } from "../../../../store";
import { AnyAction } from "redux";
import { typeExporter } from "../../helpers/typeExporter";
import pokeball from '../../../../assets/images/pokeball.png'
import {
  AppContentContainer,
  PokemonGridContainer,
  Title,
  ChallengesRow,
  PokeballImage,
  GridAndTypesContainer,
  ChallengesColumn,
  Type,
} from "./style";

const PokemonGrid = () => {
  const dispatch = useAppDispatch();
  const pokemonData = useSelector((state: RootState) => state.pokemonGrid.pokemon);

  useEffect(() => {
    // dispatch(fetchAllPokemon() as unknown as AnyAction);
  }, []);

  const typeRandomizer = () => {
    const randomTypes = typeExporter.getRandomTypes(3);
    return randomTypes.map((type, index) => (
      <Type key={index}>
        <img src={typeExporter.typeImages[type]} alt={type} />
      </Type>
    ));
  };

  return (
    <AppContentContainer>
      <Header
        text="PokemonGrid"
      />
      <PokemonGridContainer>
        <Title>Today's puzzle</Title>
        <ChallengesRow>
          <PokeballImage
            src={pokeball}
            alt="pokeball"
          />
          {typeRandomizer()}
        </ChallengesRow>
        <GridAndTypesContainer>
          <ChallengesColumn>
            {typeRandomizer()}
          </ChallengesColumn>
          <Grid
            pokemonData={pokemonData}
          />
        </GridAndTypesContainer>
      </PokemonGridContainer>
    </AppContentContainer>
  );

};

export default PokemonGrid;
