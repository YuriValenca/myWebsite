import styled from "styled-components";

export const AppContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #E8E9EB;
`;

export const PokemonGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-family: "pokemon_classicregular";
  font-size: 36px;
  margin-bottom: 24px;
`;

export const ChallengesRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const PokeballImage = styled.img`
  width: 72px;
  height: 72px;
  margin-left: -18px;
`;

export const GridAndTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

export const ChallengesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Type = styled.div`
  font-family: "pokemon_classicregular";
  font-size: 18px;
  margin-right: 12px;
`;

export const NewGameButton = styled.button`
  font-family: "pokemon_classicregular";
  font-size: 18px;
  background-color: #F2CB07;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
`;
