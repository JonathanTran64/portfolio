import styled from 'styled-components';
import TitleSection from './TitleSection';
import Underline from './Underline';
import Project from './Project';
import Divider from './Divider';

import mariogame from '../img/mariogame.png';
import slingair from '../img/slingair.png';
import tictactoegame from '../img/tictactoegame.png';

const Container = styled.div`
  height: 100vh;

  @media (max-width: 1620px) {
    height: 100%;
  }
`;

const ProjectWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1600px) {
  }
`;

const Projects = () => {
  return (
    <>
      <Container id="projects">
        <TitleSection title={'PROJECTS'} />
        <Underline />

        <ProjectWrapper>
          <Project
            image={mariogame}
            tools={'HTML, CSS, JavaScript'}
            projectName={'Mario Game'}
            linkUrl={'https://mario-game-bay.vercel.app/'}
          />

          <Project
            image={slingair}
            tools={'Node.Js, MondoDB, React'}
            projectName={'SlingAir'}
          />

          <Project
            image={tictactoegame}
            tools={'React'}
            projectName={'Tic Tac Toe'}
            linkUrl={'https://tic-tac-toe-pi-livid.vercel.app/'}
          />
        </ProjectWrapper>
      </Container>
      <Divider></Divider>
    </>
  );
};

export default Projects;
