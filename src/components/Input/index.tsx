import {
  InputContainer,
  InputField,
  InputLogo,
} from "./style";
import MagGlass from "../../assets/icons/mag_glass.png";

interface InputProps {
  placeholder: string;
  value: string;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  value,
  error,
  onChange,
  onKeyDown,
}: InputProps) => {

  return (
    <InputContainer
      error={error}
    >
      <InputLogo src={MagGlass} alt="Logo" />
      <InputField
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus
      />
    </InputContainer>
  );
};

export default Input;