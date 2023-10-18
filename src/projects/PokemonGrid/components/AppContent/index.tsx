import { useEffect, useMemo, useState } from "react";
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

  const [cellTypes, setCellTypes] = useState(Array(9).fill(Array(2).fill('')));
  const [selectedCellIndex, setSelectedCellIndex] = useState<number | 0>(0);

  const pokemonData = useSelector((state: RootState) => state.pokemonGrid.fetchAllPokemon.pokemon);

  const columnRandomTypes = useMemo(() => typeExporter.getRandomTypes(3), []);
  const rowRandomTypes = useMemo(() => typeExporter.getRandomTypes(3), []);

  useEffect(() => {
    dispatch(fetchAllPokemon() as unknown as AnyAction);
    setCellTypes([[
      columnRandomTypes[0],
      rowRandomTypes[0],
    ], [
      columnRandomTypes[0],
      rowRandomTypes[1],
    ], [
      columnRandomTypes[0],
      rowRandomTypes[2],
    ], [
      columnRandomTypes[1],
      rowRandomTypes[0],
    ], [
      columnRandomTypes[1],
      rowRandomTypes[1],
    ], [
      columnRandomTypes[1],
      rowRandomTypes[2],
    ], [
      columnRandomTypes[2],
      rowRandomTypes[0],
    ], [
      columnRandomTypes[2],
      rowRandomTypes[1],
    ], [
      columnRandomTypes[2],
      rowRandomTypes[2],
    ]
    ]);
  }, []);

  const typeRandomizer = (column: boolean, row: boolean) => {
    if (column) return columnRandomTypes.map((type, index) => (
      <Type key={index}>
        <img src={typeExporter.typeImages[type]} alt={type} />
      </Type>
    ));

    if (row) return rowRandomTypes.map((type, index) => (
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
          {typeRandomizer(false, true)}
        </ChallengesRow>
        <GridAndTypesContainer>
          <ChallengesColumn>
            {typeRandomizer(true, false)}
          </ChallengesColumn>
          <Grid
            pokemonData={pokemonData}
            selectedCellIndex={selectedCellIndex}
            setSelectedCellIndex={setSelectedCellIndex}
            cellTypes={cellTypes}
          />
        </GridAndTypesContainer>
      </PokemonGridContainer>
    </AppContentContainer>
  );

};

export default PokemonGrid;
