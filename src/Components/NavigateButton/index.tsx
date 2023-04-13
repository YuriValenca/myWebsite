import { useNavigate } from "react-router-dom";

interface NavigateButtonTypes {
  path: string;
  component: string;
}

const NavigateButton = ({
  path,
  component,
}: NavigateButtonTypes) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  }
  return (
    <button
      onClick={handleClick}
    >
      {component}
    </button>
  )
}

export default NavigateButton;
