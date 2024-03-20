import styled from 'styled-components';
import Buttons from './Buttons';

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  height: 100px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;

  @media (max-width: 1100px) {
    height: 80px;
  }
`;

const Container = styled.div`
  margin-right: 80px;
`;
const Nav = () => {
  return (
    <Navbar>
      <Container>
        <Buttons text="Home" id="home" />
        <Buttons text="About" id="about" />
        <Buttons text="Projects" id="projects" />
        <Buttons text="Contact" id="contact" />
      </Container>
    </Navbar>
  );
};

export default Nav;
