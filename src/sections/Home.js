import styled from 'styled-components';
import Divider from './Divider';
import ScrollMouse from './ScrollMouse';

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

  @media (max-width: 1500px) {
    font-size: 60px;
  }

  @media (max-width: 800px) {
    font-size: 40px;
  }
`;

const Job = styled.h1`
  @media (max-width: 1500px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }
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

  @media (max-width: 1500px) {
    font-size: 15px;
    width: 230px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
    width: 190px;
  }
`;

const Home = () => {
  const handleClick = () => {
    const element = document.getElementById('projects');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Container id="home">
        <Intro>Hi, I'm Jonathan.</Intro>
        <Job>Full-Stack Web Developer </Job>
        <ProjectButton onClick={handleClick}>PROJECTS</ProjectButton>
        <ScrollMouse />
      </Container>
      <Divider />
    </>
  );
};

export default Home;
