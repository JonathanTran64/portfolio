import styled from "styled-components";
import TitleSection from "./TitleSection";
import Underline from "./Underline";

const Container = styled.div`
  height: 100vh;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <TitleSection title={"PROJECTS"} />
      <Underline />
    </Container>
  );
};

export default Projects;
