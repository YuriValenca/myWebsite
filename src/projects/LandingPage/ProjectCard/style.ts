import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  margin: 8px 0 32px 32px;
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: linear-gradient(180deg, #FFFFFF 0%,  #8348B8 100%);
  border-radius: 8px;
  border: none;

  ${ButtonsContainer} {
    height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition: height 0.5s ease, opacity 0.5s ease, visibility 0.3s ease;
  }

  &:hover {
    ${ButtonsContainer} {
      height: 50px;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const TitleButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

export const ProjectTitle = styled.h2`
  color: #FFF;
  font-family: 'noto_sanssemibold';
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  margin-left: 32px;
`;

export const DemoButton = styled.button`
  width: 136px;
  height: 44px;
  padding: 12px 20px;
  color: #FFF;
  margin-right: 12px;
  font-size: 16px;
  font-family: 'noto_sanssemibold';
  line-height: 20px;
  border-radius: 4px;
  border: 1px solid #FF0098;
  background: #A00082;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const GithubButton = styled.button`
  width: 200px;
  height: 44px;
  padding: 12px 20px;
  color: #FAFAFA;
  font-size: 16px;
  font-family: 'noto_sanssemibold';
  line-height: 20px;
  background: none;
  border-radius: 4px;
  border: 1px solid #FFF;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

`;
