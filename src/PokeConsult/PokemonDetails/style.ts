import styled, { css } from "styled-components";

interface DualTypeTypes {
  dualType: boolean;
}

interface TypeColorTypes {
  type: string;
}

const typeStyles = {
  Normal: css`
    background-color: #A8A878;
  `,
  Fire: css`
    background-color: #F08030;
  `,
  Water: css`
    background-color: #6890F0;
  `,
  Grass: css`
    background-color: #78C850;
  `,
  Electric: css`
    background-color: #F8D030;
  `,
  Ice: css`
    background-color: #98D8D8;
  `,
  Fighting: css`
    background-color: #C03028;
    color: #fff;
  `,
  Poison: css`
    background-color: #A040A0;
    color: #fff;
  `,
  Ground: css`
    background-color: #E0C068;
  `,
  Flying: css`
    background-color: #A890F0;
  `,
  Psychic: css`
    background-color: #F85888;
  `,
  Bug: css`
    background-color: #A8B820;
  `,
  Rock: css`
    background-color: #B8A038;
  `,
  Ghost: css`
    background-color: #705898;
    color: #fff;
  `,
  Dragon: css`
    background-color: #7038F8;
    color: #fff;
  `,
  Dark: css`
    background-color: #705848;
    color: #fff;
  `,
  Steel: css`
    background-color: #B8B8D0;
  `,
  Fairy: css`
    background-color: #EE99AC;
  `,
};

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  height: calc(100vh - 65px);
`;

export const InputButtonContainer = styled.div`
  margin-left: 35px;
`;

export const PokemonInput = styled.input`
  width: 450px;
  height: 35px;
  border-radius: 0;
  background-color: transparent;
  border: 0;
  border-bottom: 3px solid #333;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const PokeButton = styled.button`
  margin-left: 15px;
`;

export const PokemonDetailBody = styled.div`
  display: flex;
  margin-top: 36px;
  font-size: 20px;
`;

export const PokemonImage = styled.img`
  width: 400px;
  height: auto;
  background-color: #ECECEC;
  border-radius: 6px;
  margin-right: 16px;
`;

export const DetailsStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: flexoregular;
  background-color: #30a7d7;
  border-radius: 24px;
  padding: 8px 16px;
`;

export const PokemonName = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

export const PokemonStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 12px 0;
`;

export const Stat = styled.p``;

export const PokemonTypes = styled.div<DualTypeTypes>`
  display: flex;
  justify-content: ${(props) => (props.dualType ? "space-evenly" : "center")};
  font-family: flexoregular;
  margin-top: 8px;
`;

export const Type = styled.div<TypeColorTypes>`
  padding: 4px 14px;
  border-radius: 4px;
  font-weight: bold;
  ${({ type }) => typeStyles[type as keyof typeof typeStyles]};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  font-family: flexoregular;
`;
