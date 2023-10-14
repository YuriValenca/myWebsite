import { styled } from "styled-components";

interface WidthTypes {
  width?: string;
}

interface PositionTypes {
  position: string;
}

export const ModalOverlay = styled.div<PositionTypes>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: ${props => props.position === 'top' ? 'flex-start' : 'center'};
  justify-content: center;
`;

export const ModalContent = styled.div<WidthTypes & PositionTypes>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  width: ${props => props.width ? props.width : '60%'};
  height: auto;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: ${props => props.position === 'top' ? '128px' : '0'};
  max-height: ${props => props.position === 'top' ? '210px' : 'auto'};
`;
