import styled from "styled-components";

interface OptionTypes {
  active: number;
};

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #F3EEE8;
  z-index: 999;
  padding: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  color: #000;
  font-family: 'Formula Condensed Bold';
  font-weight:normal;
  font-size:60px;
  line-height: 1;
  padding-top: 10px;
  user-select: none;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
  font-size: 24px;
  width: 170px;
`;

export const Option = styled.button<OptionTypes>`
  background-color: transparent;
  border: none;
  color: #000000;
  cursor: pointer;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  padding: 2px 4px;
  &:first-child {
    border-bottom: 2px solid ${(props) => props.active === 1 ? "#E23636" : "transparent"};
  }
  &:last-child {
    border-bottom: 2px solid ${(props) => props.active === 2 ? "#E23636" : "transparent"};
  }
  &:hover {
    background-color: rgba(226, 54, 54, 0.25);
    border-radius: 4px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 300px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 6px 12px;
  border-radius: 4px;
  border: 2px solid #000000;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
`;

export const AutocompleteList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: calc(100% - 16px);
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AutocompleteItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
