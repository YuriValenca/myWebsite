import styled from "styled-components";

interface AsModalTypes {
  asModal: boolean;
}

interface NotFoundTypes {
  notFound?: boolean;
}

export const SearchHeroContainer = styled.div<AsModalTypes>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ asModal }) => asModal ? 'space-between' : 'center'};
  margin-top: ${({ asModal }) => asModal ? '0' : '170px'};
  max-width: 1300px;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 36px;
  width: 45%;
`;

export const HeroTitle = styled.h1`
  display: flex;
  align-items: flex-start;
  font-family: 'Formula Condensed Bold';
  font-weight: normal;
  font-size: 42px;
  user-select: none;
  width: 100%;
  margin: 0 0 24px 0;
`;

export const HeroDescription = styled.p`
  display: flex;
  align-items: flex-start;
  font-size: 18px;
  margin: 0;
`;

export const HeroImageContainer = styled.div<NotFoundTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ notFound }) => notFound ? '900px' : '450px'};

  img {
    width: ${({ notFound }) => notFound ? '600px' : '450px'};
    height: ${({ notFound }) => notFound ? 'auto' : '450px'};
    max-width: ${({ notFound }) => notFound ? '600px' : '450px'};
    max-height: 450px;
    object-fit: cover;
    object-position: left center;
  }
`;
