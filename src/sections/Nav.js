import styled from "styled-components";
import Buttons from "./Button";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Nav = () => {
  return (
    <Navbar>
      <Buttons text="Home" id="home" />
      <Buttons text="About" id="about" />
      <button>Projects</button>
      <button>Contact</button>
    </Navbar>
  );
};

export default Nav;
