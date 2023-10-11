import { useState } from "react";
import { Pokemon } from "../../store/types";
import {
  GridContainer,
  GridItem
} from "./style";
import Modal from "../../../../components/Modal";

interface GridTypes {
  pokemonData: Pokemon[];
}

const Grid = ({
  pokemonData,
}: GridTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <GridContainer>
      {[...Array(9)].map((_, index) => (
        <GridItem
          key={index}
          onClick={openModal}
        />
      ))}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          width="30%"
        >
          <h1>Modal content</h1>
        </Modal>
      )}
    </GridContainer>
  );

};

export default Grid;