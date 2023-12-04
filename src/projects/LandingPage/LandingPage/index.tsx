import ColouredText from "../../../components/ColouredText";
import ProjectCard from "../ProjectCard";
import {
  LandingPageContainer,
  LandingPageHeader,
  NameTitle,
  ButtonsHolder,
  HeaderGoToButton,
  TextContainer,
  TextHighlight,
  TextSubtitle,
  ProjectCardsGrid,
  ContactContainer,
  Contacts,
  ContactsTextHighlight,
  ContactsText,
} from './style';

const LandingPage = () => {

  return (
    <LandingPageContainer>
      <LandingPageHeader>
        <NameTitle>
          Yuri Valença
        </NameTitle>
        <ButtonsHolder>
          <HeaderGoToButton>
            About
          </HeaderGoToButton>
          <HeaderGoToButton>
            Contact
          </HeaderGoToButton>
        </ButtonsHolder>
      </LandingPageHeader>
      <TextContainer>
        <TextHighlight>
          A
          <ColouredText
            text=" web developer"
            colour="#FF8D3B"
          /> with a passion for creating beautiful and functional user interfaces that makes positive impact.
        </TextHighlight>
        <TextSubtitle>
          Finishing my Bachelor on Computer Science at Universidade Federal de Pernambuco.
          I have 11 months of professional experience as a Frontend Developer, using technologies
          such as React, Redux, Styled Components, JavaScript and TypeScript.
        </TextSubtitle>
      </TextContainer>
      <ProjectCardsGrid>
        <ProjectCard
          demo
          title="PokemonGrid"
          path="myWebsite/tree/main/src/projects/PokemonGrid"
        />
        <ProjectCard
          demo
          title="MarvelSearch"
          path="fpass_challenge"
        />
        <ProjectCard
          demo
          title="PokeConsult"
          path="myWebsite/tree/main/src/projects/PokeConsult"
        />
        <ProjectCard
          demo={false}
          title="100 Python Days"
          path="100PythonDays"
        />
        <ProjectCard
          demo={false}
          title="Desafio Trakto"
          path="desafioTrakto"
        />
      </ProjectCardsGrid>
      <ContactContainer>
        <TextHighlight>
          Want to get
          <ColouredText
            text=" in touch"
            colour="#FF8D3B"
          />?
        </TextHighlight>
        <Contacts>
          <ContactsTextHighlight>
            Send me an e-mail:
            <ContactsText>
              yurivalencacunha@hotmail.com
            </ContactsText>
          </ContactsTextHighlight>
          <ContactsTextHighlight>
            Text me on WhatsApp!
            <ContactsText>
              +55 81 997360119
            </ContactsText>
          </ContactsTextHighlight>
          <ContactsTextHighlight>
            Let's connect on LinkedIn
            <ContactsText>
              <a
                href="https://www.linkedin.com/in/yuri-valenca/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/yuri-valenca/
              </a>
            </ContactsText>
          </ContactsTextHighlight>
        </Contacts>
      </ContactContainer>
    </LandingPageContainer>
  )
}

export default LandingPage;
