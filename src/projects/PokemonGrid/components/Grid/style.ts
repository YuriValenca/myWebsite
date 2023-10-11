import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
`;

export const GridItem = styled.div`
  width: 135px;
  height: 135px;
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
