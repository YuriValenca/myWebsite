import { useEffect, useState } from "react";
import PokemonGrid from "../PokemonGrid";
import Modal from "../../../../components/Modal";
import {
  ModalContentContainer,
  ModalTitle,
  InstructionsList,
  ListItem,
  DisclaimerButtonsContainer,
  ModalButton,
} from "./style";

const PokemonGridAppContent = () => {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimerModal(true);
    }
  }, []);

  const handleDisclaimerModalClose = (storePreference: boolean) => {
    setShowDisclaimerModal(false);
    if (storePreference) {
      localStorage.setItem('hasSeenDisclaimer', 'true');
    }
  }

  return (
    <>
      <PokemonGrid />
      {showDisclaimerModal && (
        <Modal
          onClose={() => handleDisclaimerModalClose(false)}
          position="center"
          width="30%"
        >
          <ModalContentContainer>
            <ModalTitle>
              How to play
            </ModalTitle>
            <InstructionsList>
              <ListItem>
                → The goal is to fill all 9 with the correct pokemon, according to the types on the left and top.
              </ListItem>
              <ListItem>
                → Click on the grid, and type the name of the pokemon you think is correct.
              </ListItem>
              <ListItem>
                → If you select a pokemon on a grid, you can change it up by clicking on it again.
              </ListItem>
              <ListItem>
                → The game will end ONLY when all 9 cells are correct. Until then, you can select and change the pokemon as many times as you want.
              </ListItem>
            </InstructionsList>
            <DisclaimerButtonsContainer>
              <ModalButton
                onClick={() => handleDisclaimerModalClose(false)}
              >
                Accept
              </ModalButton>
              <ModalButton
                storePreferenceButton
                onClick={() => handleDisclaimerModalClose(true)}
              >
                I'm a pro, don't show me again
              </ModalButton>
            </DisclaimerButtonsContainer>
          </ModalContentContainer>
        </Modal>
      )}
    </>
  )

};

export default PokemonGridAppContent;
