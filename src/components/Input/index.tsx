import {
  InputContainer,
  InputField,
  InputLogo,
} from "./style";
import MagGlass from "../../assets/icons/mag_glass.png";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
}: InputProps) => {

  return (
    <InputContainer>
      <InputLogo src={MagGlass} alt="Logo" />
      <InputField
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </InputContainer>
  );
};

export default Input;