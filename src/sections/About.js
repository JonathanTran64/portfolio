import styled from "styled-components";
import picture from "../img/sungjinwoo.jpg";

const Container = styled.div`
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
`;

const AboutMe = styled.h1`
  font-size: 60px;
  padding-top: 100px;
  text-align: center;
`;

const ProfilePicture = styled.img`
  position: relative;
  left: 21%;
  top: 5%;
  width: 10%;

  border-radius: 50%;
`;
const Description = styled.p`
  font-size: 20px;
  position: relative;
  top: 5%;
  left: 12%;
  width: 28%;
`;

const Skills = styled.div``;

const About = () => {
  return (
    <Container id="about">
      <AboutMe>About</AboutMe>
      <ProfilePicture src={picture} />

      <Description>
        Hey there, I'm Jonathan Tran! A passionate full-stack web developer
        continuously sharpening my skills and eagerly embracing new challenges.
        With a wide range of skills in my toolkit, I'm confident to tackle
        exciting projects head-on. Beyond coding, you'll find me reading books
        or immersed in the virtual worlds of video games whenever I'm not at my
        desk.
      </Description>
      <Skills>werwerwer</Skills>
    </Container>
  );
};

export default About;
