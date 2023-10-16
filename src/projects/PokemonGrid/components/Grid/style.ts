import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #F2F3F4;
  border: 0.1px solid #DADEDF;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:nth-child(3) {
    border-top-right-radius: 10px;
  }

  &:nth-child(7) {
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background-color: #F0F0F0;
  }
`;

export const SelectedPokemonImage = styled.img`
  width: 140px;
  height: 140px;
  max-width: 140px;
  max-height: 140px;
`;

export const SelectedPokemonName = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #1F1F1F;
  font-family: 'pokemon_classicregular';
  margin: 0 8px 8px;
  background-color: #ffffff;
  padding: 4px 8px;
  border-radius: 12px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px 24px;
  box-sizing: border-box;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1F1F1F;
  font-family: "Lato", sans-serif;
  margin-bottom: 24px;
`;

export const AutocompletePokemonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AutocompletePokemonItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const AutocompletePokemonImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 12px;
`;

export const NameAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const PokemonSuggestionName = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #1F1F1F;
  font-family: "Lato", sans-serif;
  margin: 0;
`;

export const SelectPokemonButton = styled.button`
  background-color: #4fc3f7;
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 20px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  border: none;
  cursor: pointer;
`;
