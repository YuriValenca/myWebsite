import { useRef, useState } from "react";
import { Pokemon } from "../../store/types";
import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";
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
} from "./style";

interface GridTypes {
  pokemonData: Pokemon[];
}

const Grid = ({
  pokemonData,
}: GridTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [selectedCellIndex, setSelectedCellIndex] = useState<number | null>(null);
  const [
    selectedPokemon, setSelectedPokemon
  ] = useState<Array<Pokemon | null>>(Array(9).fill(null));
  const [selectedPokemonInGrid, setSelectedPokemonInGrid] = useState<string[]>([]);

  const autocompleteRef = useRef<HTMLUListElement>(null);

  const openModal = (index: number) => {
    setSelectedCellIndex(index);
    setIsModalOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 4) {
      const filteredSuggestions = pokemonData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase()) &&
        !selectedPokemonInGrid.includes(pokemon.name)
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

  const handleAutocompleteItemClick = (selectedSuggestion: Pokemon) => {
    if (selectedCellIndex !== null) {
      const newSelectedPokemon = [...selectedPokemon];
      newSelectedPokemon[selectedCellIndex] = selectedSuggestion;
      setSelectedPokemon(newSelectedPokemon);

      const newSelectedPokemonInGrid = [...selectedPokemonInGrid, selectedSuggestion.name];
      setSelectedPokemonInGrid(newSelectedPokemonInGrid);

      setIsModalOpen(false);
      setSuggestions([]);
      setInputValue('');
    }
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
      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false)
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
            />
            {suggestions.length > 0 && (
              <AutocompletePokemonList
                ref={autocompleteRef}
              >
                {suggestions.map((suggestion, index) => (
                  <AutocompletePokemonItem
                    key={index}
                    onClick={() => handleAutocompleteItemClick(suggestion)}
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
                        onClick={() => handleAutocompleteItemClick(suggestion)}
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
    </GridContainer>
  );

};

export default Grid;