import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  ProjectCardContainer,
  TitleButtonContainer,
  ButtonsContainer,
  DemoButton,
  GithubButton,
  ProjectTitle,
} from './style';

interface ProjectCardTypes {
  demo: boolean;
  title: string;
  path: string;
}

const ProjectCard = ({
  demo,
  title,
  path,
}: ProjectCardTypes) => {

  const navigate = useNavigate();
  const handleDemoClick = () => navigate(`/${title}`);
  const handleGitHubClick = () => window.open(
    `https://github.com/YuriValenca/${path}`, "_blank"
  );


  return (
    <ProjectCardContainer>
      <TitleButtonContainer>
        <ProjectTitle>
          {title}
        </ProjectTitle>
        <ButtonsContainer>
          {demo && (
            <DemoButton
              onClick={handleDemoClick}
            >
              View Demo
            </DemoButton>
          )}
          <GithubButton
            onClick={handleGitHubClick}
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} />
            View on Github
          </GithubButton>
        </ButtonsContainer>
      </TitleButtonContainer>
    </ProjectCardContainer>
  )
};

export default ProjectCard;
