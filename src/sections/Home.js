import styled from "styled-components";
import scrolldownImage from "../img/scrolldown.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0 auto;
  height: 100vh;
  color: white;
`;

const Name = styled.h1`
  font-size: 80px;
`;

const Scroll = styled.img`
  width: 100px;
  position: relative;
  top: 20%;
`;
const Home = () => {
  return (
    <Container id="home">
      <Name>Hi, I'm Jonathan. </Name>
      <h1>Full-Stack Web Developer</h1>
      <Scroll src={scrolldownImage}></Scroll>
    </Container>
  );
};

export default Home;
