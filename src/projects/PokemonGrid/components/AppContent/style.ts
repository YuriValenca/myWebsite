import styled from "styled-components";

interface ModalButtonColorTypes {
  storePreferenceButton?: boolean;
}

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  padding: 8px 24px;
`;

export const ModalTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 12px;
`;

export const InstructionsList = styled.ul`
  list-style: none;
  font-size: 20px;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
`;

export const DisclaimerButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 24px;
`;

export const ModalButton = styled.button<ModalButtonColorTypes>`
  background-color: ${({ storePreferenceButton }) => (storePreferenceButton ? "#f44336" : "#2196f3")};
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: ${({ storePreferenceButton }) => (storePreferenceButton ? "#e53935" : "#1976d2")};
  }
`;
