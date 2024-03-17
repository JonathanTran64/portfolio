import styled from "styled-components";
import scrolldownImage from "../img/scrolldown.gif";
import Divider from "./Divider";
import ScrollMouse from "./ScrollMouse";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  color: white;
`;

const Intro = styled.h1`
  font-size: 80px;
  margin-bottom: 10px;
`;

const ProjectButton = styled.button`
  position: relative;
  top: 5%;
  border: 2px solid white;
  width: 250px;
  height: 60px;
  background-color: #201e33;
  border-radius: 10px;
  font-size: 18px;
  color: white;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-10%);
    transition: transform 0.3s;
  }
`;

const Scroll = styled.img`
  width: 100px;
  position: relative;
  top: 30%;
`;

const Home = () => {
  const handleClick = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container id="home">
        <Intro>Hi, I'm Jonathan.</Intro>
        <h1>Full-Stack Web Developer 🤓</h1>
        <ProjectButton onClick={handleClick}>PROJECTS</ProjectButton>
        <ScrollMouse />
      </Container>
      <Divider />
    </>
  );
};

export default Home;
