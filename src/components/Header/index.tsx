import { useNavigate } from "react-router-dom";
import pokeball from '../../assets/images/pokeball.png'
import {
  HeaderContainer,
  GoBackButton,
  TitleContainer,
  PokeballImage,
  AppTitle,
} from "./style";

interface HeaderTypes {
  text: string;
}

const Header = ({
  text
}: HeaderTypes) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }



  return (
    <HeaderContainer>
      <GoBackButton onClick={handleClick}>Go back</GoBackButton>
      <TitleContainer>
        <PokeballImage
          src={pokeball}
          alt="pokeball"
        />
        <AppTitle>
          {text}
        </AppTitle>
      </TitleContainer>
    </HeaderContainer>
  )
}

export default Header;
