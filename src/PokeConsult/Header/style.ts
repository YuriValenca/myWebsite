import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: 130px;
  background-color: yellow;
  padding: 0 20px;
`;

export const PokemonLogoImage = styled.img.attrs({
  src: '../../assets/pokemon-logo.png',
})`
  width: 115px;
  height: 70px;
`;

export const PokemonInput = styled.input`
  width: 300px;
  height: 30px;
`;