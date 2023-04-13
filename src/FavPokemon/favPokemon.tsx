import { useState } from "react";
import {
  DisclaimerContainer,
  DisclaimerTitle,
  DisclaimerText,
  DisclaimerLink,
  DisclaimerButton,
} from "./style";
import FavPokemonPicker from "./FavPokemonPicker";

const FavPokemon = () => {
  const [disclaimer, setDisclaimer] = useState(false);

  return (
    <>
      {!disclaimer && (
        <DisclaimerContainer>
          <DisclaimerTitle>Disclaimer</DisclaimerTitle>
          <DisclaimerText>
            This project is an interpretation of{' '}
            <DisclaimerLink href="https://github.com/CajunAvenger" target="_blank" rel="noreferrer">
              CajunAvenger
            </DisclaimerLink>,
            's work, located at{' '}
            <DisclaimerLink href="https://cajunavenger.github.io/" target="_blank" rel="noreferrer">
              https://cajunavenger.github.io/
            </DisclaimerLink>, and will be used for educational purposes only.
            So please, be sure to check his project too! I took a lot of inspiration from it.
          </DisclaimerText>
          <DisclaimerButton onClick={() => setDisclaimer(true)}>
            I agree
          </DisclaimerButton>
        </DisclaimerContainer>
      )}
      <FavPokemonPicker />
    </>
  )
}

export default FavPokemon;
