import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../../store";
import { AnyAction } from "redux";
import { fetchHero } from "../../store/actions/fetchHero";
import heroesNames from "../../helpers/heroesNames.json";
import {
  HeaderContainer,
  HeaderWrapper,
  TitleWrapper,
  OptionsWrapper,
  Option,
  SearchWrapper,
  SearchInput,
  AutocompleteList,
  AutocompleteItem,
} from "./style";

interface HeaderTypes {
  page: number;
  setPage: (page: number) => void;
}

const Header = ({
  page,
  setPage,
}: HeaderTypes) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const autocompleteRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = heroesNames.filter(heroName =>
        heroName.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSearch = (searchValue: string) => {
    dispatch(fetchHero(searchValue) as unknown as AnyAction);
  };

  const handleAutocompleteItemClick = (selectedSuggestion: string) => {
    setTimeout(() => {
      setPage(1);
    }, 550);
    setSuggestions([]);
    handleSearch(selectedSuggestion);
  };

  const closeAutocomplete = (event: MouseEvent) => {
    if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeAutocomplete);
    return () => {
      document.removeEventListener('click', closeAutocomplete);
    }
  }, []);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <TitleWrapper>
          MARVEL
        </TitleWrapper>
        <OptionsWrapper>
          <Option
            active={page}
            onClick={() => setPage(1)}
          >
            Search
          </Option>
          <Option
            active={page}
            onClick={() => setPage(2)}
          >
            List
          </Option>
        </OptionsWrapper>
        <SearchWrapper>
          <SearchInput
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(event: any) => {
              if (event.key === 'Enter') {
                handleSearch(inputValue);
                setSuggestions([]);
              }
            }}
          />
          {suggestions.length > 0 && (
            <AutocompleteList
              ref={autocompleteRef as React.RefObject<HTMLUListElement>}
            >
              {suggestions.map((suggestion, index) => (
                <AutocompleteItem
                  key={index}
                  onClick={() => {
                    handleAutocompleteItemClick(suggestion)
                  }}
                >
                  {suggestion}
                </AutocompleteItem>
              ))}
            </AutocompleteList>
          )}
        </SearchWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header;
