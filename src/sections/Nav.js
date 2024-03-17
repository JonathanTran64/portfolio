import styled from "styled-components";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";

const Navbar = styled.div`
  display: ${(props) => props.$display};
  align-items: center;
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 1s ease; /* Add a transition for opacity */
  opacity: ${(props) => props.$visible}; /* Set opacity based on visibility */
`;

const Nav = () => {
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(true);
  let timeoutRef = null;

  const handleScroll = () => {
    setHide(true);

    clearTimeout(timeoutRef);
    timeoutRef = setTimeout(() => {
      setHide(false);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(timeoutRef);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(!hide);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hide]);

  return (
    <Navbar $display={hide ? "none" : "flex"} $visible={visible ? 1 : 0}>
      <Buttons text="Home" id="home" />
      <Buttons text="About" id="about" />
      <Buttons text="Projects" id="projects" />
      <button>Contact</button>
    </Navbar>
  );
};

export default Nav;
