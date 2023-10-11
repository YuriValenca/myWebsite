import { styled } from "styled-components";

interface WidthTypes {
  width?: string;
}

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div<WidthTypes>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  width: ${props => props.width ? props.width : '60%'};
  height: auto;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ModalCloseButton = styled.button`
  align-self: flex-end;
  border: none;
  background: transparent;
  font-family: 'Lato', sans-serif;
  margin-bottom: -24px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  padding: 0;
  cursor: pointer;
  color: #000;
`;
