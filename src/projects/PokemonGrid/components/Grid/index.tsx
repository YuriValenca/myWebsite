import { useRef, useState } from "react";
import { Pokemon } from "../../store/types";
import {
  GridContainer,
  GridItem,
  ModalContainer,
  ModalTitle,
  AutocompletePokemonList,
  AutocompletePokemonItem,
  AutocompletePokemonImage,
  NameAndButtonContainer,
  PokemonSuggestionName,
  SelectPokemonButton,
} from "./style";
import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";

interface GridTypes {
  pokemonData: Pokemon[];
}

const Grid = ({
  pokemonData,
}: GridTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const autocompleteRef = useRef<HTMLUListElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 4) {
      const filteredSuggestions = pokemonData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(inputValue);
      setSuggestions([]);
    }
  };

  const handleAutocompleteItemClick = (selectedSuggestion: string) => {
    console.log(selectedSuggestion);
  };

  return (
    <GridContainer>
      {[...Array(9)].map((_, index) => (
        <GridItem
          key={index}
          onClick={openModal}
        />
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
              onKeyDown={handleKeyDown}
            />
            {suggestions.length > 0 && (
              <AutocompletePokemonList
                ref={autocompleteRef}
              >
                {suggestions.map((suggestion, index) => (
                  <AutocompletePokemonItem
                    key={index}
                    onClick={() => handleAutocompleteItemClick(suggestion.name)}
                  >
                    <AutocompletePokemonImage
                      src={suggestion.image}
                      alt={suggestion.name}
                    />
                    <NameAndButtonContainer>
                      <PokemonSuggestionName>
                        {formatPokemonName(suggestion.name)}
                      </PokemonSuggestionName>
                      <SelectPokemonButton>
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