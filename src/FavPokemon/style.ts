import styled from "styled-components";

export const DisclaimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  color: #fff;
`;

export const DisclaimerTitle = styled.h1`
  margin-top: 100px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
`;

export const DisclaimerText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  margin-bottom: 50px;
`;

export const DisclaimerLink = styled.a`
  color: #79b8ff;
  text-decoration: underline;

  &:hover {
    color: #ccffff;
  }
`;

export const DisclaimerButton = styled.button`
  padding: 15px 30px;
  background-color: #fff;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
