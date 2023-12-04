import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  width: 100%;
  background-color: #333;
  padding: 0 20px;
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a00082;
  border: #FF0098;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  font-family: 'noto_sanssemibold';

  &:hover {
    background-color: #7D0066;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PokeballImage = styled.img`
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
