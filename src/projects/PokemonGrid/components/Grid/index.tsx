import { useEffect, useRef, useState } from "react";
import { Pokemon } from "../../store/types";
import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";
import { verifyUserChoice } from "../../store/actions/verifyUserChoice";
import { useAppDispatch } from "../../../../store";
import { AnyAction } from "redux";
import { NewGameButton } from "../PokemonGrid/style";
import {
  GridContainer,
  GridItem,
  SelectedPokemonImage,
  SelectedPokemonName,
  ModalContainer,
  ModalTitle,
  AutocompletePokemonList,
  AutocompletePokemonItem,
  AutocompletePokemonImage,
  NameAndButtonContainer,
  PokemonSuggestionName,
  SelectPokemonButton,
  EndGameContainer,
  EndGameText,
  ButtonsContainer,
} from "./style";

interface GridTypes {
  pokemonData: Pokemon[];
  selectedCellIndex: number | 0;
  setSelectedCellIndex: React.Dispatch<React.SetStateAction<number | 0>>;
  cellTypes: string[][];
  gameResetter: () => void;
}

const Grid = ({
  pokemonData,
  selectedCellIndex,
  setSelectedCellIndex,
  cellTypes,
  gameResetter,
}: GridTypes) => {
  const dispatch = useAppDispatch();

  const [isUserInputModalOpen, setIsUserInputModalOpen] = useState(false);
  const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [
    selectedPokemon, setSelectedPokemon
  ] = useState<Array<Pokemon | null>>(Array(9).fill(null));
  const [pokemonNamesInGrid, setPokemonNamesInGrid] = useState<string[]>([]);
  const [inputError, setInputError] = useState(false);

  const autocompleteRef = useRef<HTMLUListElement>(null);

  const handleNewGameClick = () => {
    setSelectedPokemon(Array(9).fill(null));
    setPokemonNamesInGrid([]);
    setIsEndGameModalOpen(false);
  };

  useEffect(() => {
    if (pokemonNamesInGrid.length === 9) {
      setIsEndGameModalOpen(true);
    }
  }, [pokemonNamesInGrid]);

  const openModal = (index: number) => {
    setInputError(false)
    setSelectedCellIndex(index);
    setIsUserInputModalOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 4) {
      const filteredSuggestions = pokemonData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase()) &&
        !pokemonNamesInGrid.includes(pokemon.name)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const formatPokemonName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const handleAutocompleteItemClick = (selectedSuggestion: Pokemon, selectedCellIndex: number) => {
    setInputError(false)
    const cellType = cellTypes[selectedCellIndex];
    dispatch(verifyUserChoice(selectedSuggestion, cellType) as unknown as AnyAction)
      .then((response: boolean) => {
        if (response) {
          setInputValue('');
          setSuggestions([]);
          const newSelectedPokemon = [...selectedPokemon];
          newSelectedPokemon[selectedCellIndex] = selectedSuggestion;
          setSelectedPokemon(newSelectedPokemon);

          const newpokemonNamesInGrid = [...pokemonNamesInGrid, selectedSuggestion.name];
          setPokemonNamesInGrid(newpokemonNamesInGrid);
          setIsUserInputModalOpen(false);
        } else {
          setInputValue('');
          setSuggestions([]);
          setInputError(true);
        }
      });
  };

  return (
    <GridContainer>
      {[...Array(9)].map((_, index) => (
        <GridItem
          key={index}
          onClick={() => openModal(index)}
        >
          {selectedPokemon[index] ? (
            <>
              <SelectedPokemonImage
                src={selectedPokemon[index]?.image}
                alt={selectedPokemon[index]?.name}
              />
              {selectedPokemon[index] !== undefined && (
                <SelectedPokemonName>
                  {formatPokemonName(selectedPokemon[index]!.name)}
                </SelectedPokemonName>
              )}
            </>
          ) : (null)}
        </GridItem>
      ))}
      {isUserInputModalOpen && (
        <Modal
          onClose={() => {
            setIsUserInputModalOpen(false)
            setInputValue('');
            setSuggestions([]);
          }}
          width="30%"
          position="top"
        >
          <ModalContainer>
            <ModalTitle>Make your guess</ModalTitle>
            <Input
              placeholder="Type your guess here"
              value={inputValue}
              onChange={handleInputChange}
              error={inputError}
            />
            {suggestions.length > 0 && (
              <AutocompletePokemonList
                ref={autocompleteRef}
              >
                {suggestions.map((suggestion, index) => (
                  <AutocompletePokemonItem
                    key={index}
                    onClick={() => {
                      handleAutocompleteItemClick(suggestion, selectedCellIndex)
                    }}
                  >
                    <AutocompletePokemonImage
                      src={suggestion.image}
                      alt={suggestion.name}
                    />
                    <NameAndButtonContainer>
                      <PokemonSuggestionName>
                        {formatPokemonName(suggestion.name)}
                      </PokemonSuggestionName>
                      <SelectPokemonButton
                        onClick={() => {
                          handleAutocompleteItemClick(suggestion, selectedCellIndex)
                        }}
                      >
                        Select
                      </SelectPokemonButton>
                    </NameAndButtonContainer>
                  </AutocompletePokemonItem>
                ))}
              </AutocompletePokemonList>
            )}
          </ModalContainer>
        </Modal>
      )}
      {isEndGameModalOpen && (
        <Modal
          onClose={() => setIsEndGameModalOpen(false)}
          position="center"
          width="30%"
        >
          <EndGameContainer>
            <ModalTitle>Congratulations! You caught all the Pokemon!</ModalTitle>
            <EndGameText>You can play a new game, or take a look at the board you filled.</EndGameText>
            <ButtonsContainer>
              <NewGameButton
                onClick={() => {
                  gameResetter()
                  handleNewGameClick()
                }}
              >New game</NewGameButton>
              <EndGameText>or</EndGameText>
              <NewGameButton onClick={() => setIsEndGameModalOpen(false)}>See board</NewGameButton>
            </ButtonsContainer>
          </EndGameContainer>
        </Modal>
      )}
    </GridContainer>
  );

};

export default Grid;