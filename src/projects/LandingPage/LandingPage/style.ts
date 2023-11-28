import styled from "styled-components";
import bgSVG from "../../../assets/images/vector.svg";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #3E0D9A 0%, #350054 52.08%, #12001D 100%);
`;

export const LandingPageHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  width: 100%;
  height: 108px;
  background: #3E0D9A;
  z-index: 99999;
`;

export const NameTitle = styled.h2`
  color: #FAFAFA;
  font-family: 'noto_sanssemibold';
  font-size: 24px;
  font-style: normal;
  line-height: normal;
`;

export const ButtonsHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 170px;
`;

export const HeaderGoToButton = styled.button`
  width: auto;
  height: 40px;
  padding: 4px 8px;
  color: #FAFAFA;
  font-size: 20px;
  font-family: 'noto_sanssemibold';
  border: none;
  background: none;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 172px;
  padding: 0 270px;
`;

export const TextHighlight = styled.h2`
  color: #FFF;
  font-family: 'noto_sanssemibold';
  font-size: 40px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 24px;
`;

export const TextSubtitle = styled.h3`
  color: #FAFAFA;
  font-family: 'noto_sansregular';
  font-size: 24px;
  font-style: normal;
  line-height: normal;
`;

export const ProjectCardsGrid = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  width: 100%;
  height: 100%;
  margin: 80px 0 100px 0;
  z-index: 1;
  background-image: url(${bgSVG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 0 270px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 270px;
  margin-bottom: 120px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export const ContactsTextHighlight = styled.h3`
  color: #FFF;
  font-family: 'noto_sanssemibold';
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 24px;
`;

export const ContactsText = styled.h4`
  color: #FAFAFA;
  font-family: 'noto_sansregular';
  font-size: 16px;
  font-style: normal;
  line-height: normal;

  > a {
    color: #FAFAFA;
    text-decoration: none;
  }
`;
