import styled from "styled-components";
import toolLogo from "../img/toolsLogo.png";
import rightArrow from "../img/rightArrow.png";

const ScreenShotLeft = styled.img`
  width: 500px;
  border-radius: 10px 10px 0 0;
  transition: opacity 0.2s;

  &:hover {
    background-color: black;
    opacity: 0.5;
    transition: opacity 0.2s;
    cursor: pointer;
  }
`;

const Container = styled.div`
  background-color: white;
  width: 500px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.95);
    transition: transform 0.2s;
  }
`;

const Name = styled.h2`
  position: relative;
  top: -15px;
  left: 30px;
  color: black;
`;

const Tools = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: gray;
`;

const ToolsLogo = styled.img`
  object-fit: contain;
  width: 20px;
  margin-right: 5px;
`;

const ToolWrapper = styled.div`
  display: flex;
  width: 300px;
  margin-left: 30px;
`;

const Button = styled.button`
  position: relative;
  left: 410px;
  bottom: 63px;
  width: 60px;
  height: 30px;
  border: none;
  background-color: black;
  border-radius: 15px;
  cursor: pointer;
`;

const Arrow = styled.img`
  margin-top: 2px;
  margin-left: 2px;
  width: 23px;
  transition: transform 0.2s;

  ${Button}:hover & {
    transform: translateX(5px);
    transition: transform 0.2s;
  }
`;

const Project = ({ tools, image, projectName }) => {
  return (
    <>
      <Container>
        <ScreenShotLeft src={image} />
        <ToolWrapper>
          <ToolsLogo src={toolLogo} />
          <Tools>{tools}</Tools>
        </ToolWrapper>
        <Name>{projectName}</Name>
        <Button>
          <Arrow src={rightArrow} />
        </Button>
      </Container>
    </>
  );
};

export default Project;
