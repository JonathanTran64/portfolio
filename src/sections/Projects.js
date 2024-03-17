import styled from "styled-components";
import TitleSection from "./TitleSection";
import Underline from "./Underline";
import Project from "./Project";

import mariogame from "../img/mariogame.png";
import slingair from "../img/slingair.png";
import tictactoegame from "../img/tictactoegame.png";

const Container = styled.div`
  height: 100vh;
`;

const ProjectWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <TitleSection title={"PROJECTS"} />
      <Underline />

      <ProjectWrapper>
        <Project
          image={mariogame}
          tools={"HTML, CSS, JavaScript"}
          projectName={"Mario Game"}
        />

        <Project
          image={slingair}
          tools={"Node.Js, MondoDB, React"}
          projectName={"SlingAir"}
        />

        <Project
          image={tictactoegame}
          tools={"React"}
          projectName={"Tic Tac Toe"}
        />
      </ProjectWrapper>
    </Container>
  );
};

export default Projects;
