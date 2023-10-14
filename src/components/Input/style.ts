import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 2px solid #929292;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  height: 44px;

  &:focus-within {
    border-color: #4fc3f7;
  }
`;

export const InputLogo = styled.img`
  height: 18px;
  margin-right: 8px;
`;

export const InputField = styled.input`
  border: none;
  flex: 1;
  font-size: 16px;
  outline: none;
`;
