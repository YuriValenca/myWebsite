import {
  HeaderContainer,
  GoBackButton,
  TitleContainer,
  PokeballImage,
  AppTitle,
} from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
          PokeConsult
        </AppTitle>
      </TitleContainer>
    </HeaderContainer>
  )
}

export default Header;
