import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  align-items: center;

  height: 100px;
  background-color: black;
  a {
    margin-left: 60px;
    text-decoration: none;
    color: white;
    font-size: 21px;
  }
`;

const Nav = () => {
  return (
    <Navbar>
      <Link>Home</Link>
      <Link>About Me</Link>
      <Link>Projects</Link>
      <Link>Contact</Link>
    </Navbar>
  );
};

export default Nav;
