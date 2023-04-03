import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  background-color: yellow;
  padding: 0 20px;
`;

export const GoBackButton = styled.button`

`;

export const PokemonLogoImage = styled.img.attrs({
  src: 'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png',
})`
  width: 200px;
  height: auto;
`;

export const PokemonInput = styled.input`
  width: 450px;
  height: 35px;
  border-radius: 0;
  background-color: transparent;
  border: 0;
  border-bottom: 3px solid #333;

  &:focus {
    outline: none;
  }
`;

export const InputButtonContainer = styled.div`
  margin-left: 35px;
`;

export const PokeButton = styled.button`
  margin-left: 15px;
`;
