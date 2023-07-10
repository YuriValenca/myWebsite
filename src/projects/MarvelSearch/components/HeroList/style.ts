import styled from "styled-components";

interface ActiveTypes {
  active?: boolean;
}

export const HeroListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  max-width: 1300px;
`;

export const HeroListTitle = styled.h1`
  font-family: 'Formula Condensed Bold';
  font-weight: normal;
  font-size: 48px;
  user-select: none;
  margin: 24px 0 14px;
`;

export const HeroListTip = styled.p`
  margin: 8px 0 16px;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
`;

export const HeroListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1300px;
`;

export const HeroListGridCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  &:hover {
    background-color: #E0D5CD;
  }
`;

export const HeroListGridCardImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 265px;
  max-height: 265px;
  object-fit: cover;
`;

export const HeroListGridCardName = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  margin: 8px 0;
  text-align: center;
  width: 100%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`;

export const PaginationButton = styled.button<ActiveTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  cursor: pointer;
  color: ${props => props.active ? '#000' : '#A8A8A8'};
  &:hover {
    color: #000;
  }
`;
