import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import { RootState, useAppDispatch } from "../../../../store";
import { fetchHero } from "../../store/actions/fetchHero";
import loading from "../../../../assets/images/loading.gif";
import Modal from "../../../../components/Modal";
import SearchHero from "../SearchHero";
import {
  HeroListContainer,
  HeroListTitle,
  HeroListTip,
  HeroListGrid,
  HeroListGridCard,
  HeroListGridCardImage,
  HeroListGridCardName,
  PaginationContainer,
  PaginationButton,
} from "./style";

const HeroList = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const [selectedHero, setSelectedHero] = useState<string | null>(null);

  const heroListData = useSelector((state: RootState) => state.heroList.heroes);
  const isLoading = useSelector((state: RootState) => state.heroList.isLoading);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const itemsPerPage = 40;
  const totalPages = Math.ceil(heroListData.length / itemsPerPage);

  const handleImageClick = (heroName: string) => {
    dispatch(fetchHero(heroName) as unknown as AnyAction);
    setTimeout(() => {
      setSelectedHero(heroName);
    }, 525);
  };

  const handleModalClose = () => {
    setSelectedHero(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const visibleHeroes = heroListData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <HeroListContainer>
      <HeroListTitle>HERO LIST</HeroListTitle>
      <HeroListTip>
        TIP: You can click a hero card to see more details!
      </HeroListTip>
      {isLoading ? (
        <>
          <img src={loading} alt="Loading GIF" />
          <HeroListTip>
            Assembling all heroes... Please wait!
          </HeroListTip>
        </>
      ) : (
        <>
          <HeroListGrid>
            {visibleHeroes.map((hero) => (
              <HeroListGridCard>
                <HeroListGridCardName>
                  {hero.name}
                </HeroListGridCardName>
                <HeroListGridCardImage
                  src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}
                  alt={hero?.name}
                  onClick={() => handleImageClick(hero.name)}
                />
              </HeroListGridCard>
            ))}
          </HeroListGrid>
          <PaginationContainer>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &larr;
            </PaginationButton>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <PaginationButton
                  key={page}
                  active={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationButton>
              )
            )}
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &rarr;
            </PaginationButton>
            {selectedHero && (
              <Modal onClose={handleModalClose}>
                <SearchHero
                  asModal
                />
              </Modal>
            )}
          </PaginationContainer>
        </>)
      }
    </HeroListContainer>
  );
};

export default HeroList;
