import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  width: 100%;
  height: auto;
  align-items: center;

  img {
    width: 3rem;
  }

  div:first-child {
    font-weight: bold;
    color: #fff;
    font-size: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  button {
    border: none;
    padding: 5px;
    background: transparent;
    transition: all .2s linear;
  }

  button:hover {
    background: #fff;
    transition: all .2s linear;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
