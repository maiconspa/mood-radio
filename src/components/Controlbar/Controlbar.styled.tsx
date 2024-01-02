import styled, { keyframes } from "styled-components";

const enterAnimation = keyframes`
  0% {
    margin-bottom: -50px;
  }

  80% {
    margin-bottom: 50px;
  }

  100% {
    margin-bottom: 20px;
  }
`;

export const ControlbarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  width: 100%;
  height: auto;
  align-items: center;
  animation: ${enterAnimation} 1s ease-out;
  
  img {
      width: 3rem;
    }
    
    div {
        padding: 1rem 2rem;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
        border-radius: 40px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  button {
    width: 50px;
    height: 50px;
    border: none;
    padding: 10px;
    background: transparent;
    transition: all 0.3s ease-in-out;
    border-radius: 100%;
  }

  button:hover {
    background: #000;
    transition: all 0.3s ease-in-out;

    svg {
        color: #fff;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
