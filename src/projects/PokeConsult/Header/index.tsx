import {
  HeaderContainer,
  GoBackButton,
  TitleContainer,
  PokeballImage,
  AppTitle,
} from "./style";
import { useNavigate } from "react-router-dom";

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
        <PokeballImage />
        <AppTitle>
          {text}
        </AppTitle>
      </TitleContainer>
    </HeaderContainer>
  )
}

export default Header;
