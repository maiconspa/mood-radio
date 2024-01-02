import styled, { keyframes } from "styled-components";

const enterAnimation = keyframes`
  0% {
    margin-top: -50px;
  }

  80% {
    margin-top: 50px;
  }

  100% {
    margin-top: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 3rem;
  position: absolute;
  width: 100%;
  height: auto;
  align-items: center;
  animation: ${enterAnimation} 1s ease-out;
  padding-top: 1rem;

  h1 {
    color: #fff;
  }
`;
