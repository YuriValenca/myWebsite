import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import {
  SearchHeroContainer,
  HeroTextContainer,
  HeroTitle,
  HeroDescription,
  HeroImageContainer,
} from './style';
import { heroDescriptionText } from "../../helpers/heroDescriptionText";
import heroNotFound from "../../../../assets/images/notFound.gif";

interface SearchHeroTypes {
  asModal: boolean;
}

const SearchHero = ({
  asModal,
}: SearchHeroTypes) => {
  const heroData = useSelector((state: RootState) => state.hero.hero);

  return (
    <SearchHeroContainer
      asModal={asModal}
    >
      {!heroData.id ? (
        <HeroImageContainer
          notFound
        >
          <img
            src={heroNotFound}
            alt="Hero not found GIF"
          />
          <HeroTextContainer>
            <HeroDescription>{heroDescriptionText(heroData)}</HeroDescription>
          </HeroTextContainer>
        </HeroImageContainer>
      ) : (
        <>
          <HeroImageContainer>
            <img
              src={`${heroData?.thumbnail.path}.${heroData?.thumbnail.extension}`}
              alt={heroData?.name}
            />
          </HeroImageContainer>
          <HeroTextContainer>
            <HeroTitle>{heroData?.name.toUpperCase()}</HeroTitle>
            <HeroDescription>{heroDescriptionText(heroData)}</HeroDescription>
          </HeroTextContainer>
        </>
      )
      }
    </SearchHeroContainer>
  )
};

export default SearchHero;
