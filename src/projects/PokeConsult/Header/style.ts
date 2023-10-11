import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  background-color: #333;
  padding: 0 20px;
`;

export const GoBackButton = styled.button`

`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PokeballImage = styled.img.attrs({
  src: 'https://www.pngmart.com/files/2/Pokeball-PNG-Image.png',
})`
  width: 36px;
  height: 36px;
  margin-right: 4px;
`;

export const AppTitle = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  font-family: 'flexoRegular';
`;
