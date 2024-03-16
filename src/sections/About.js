import styled from "styled-components";

import Skills from "./Skills";
import Description from "./Description";
import Underline from "./Underline";

const Container = styled.div`
  height: 100vh;
  color: white;

  @media (max-width: 1300px) {
    height: 100%;
  }
`;

const AboutMe = styled.h1`
  font-size: 55px;
  padding-top: 100px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <AboutMe>ABOUT ME</AboutMe>
      <Underline />
      <Wrapper>
        <Description />
        <Skills />
      </Wrapper>
    </Container>
  );
};

export default About;
