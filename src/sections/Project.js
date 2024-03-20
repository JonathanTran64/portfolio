import styled from 'styled-components';
import toolLogo from '../img/toolsLogo.png';
import rightArrow from '../img/rightArrow.png';

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

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

const Container = styled.div`
  background-color: white;
  width: 500px;
  height: 350px;
  margin: 0 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.95);
    transition: transform 0.2s;
  }

  @media (max-width: 1620px) {
    margin-bottom: 50px;
  }

  @media (max-width: 800px) {
    width: 400px;
    height: 300px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 240px;
  }
`;

const Name = styled.h2`
  position: relative;
  top: -15px;
  left: 30px;
  color: black;

  @media (max-width: 500px) {
    font-size: 20px;
    left: 20px;
  }
`;

const Tools = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: gray;

  @media (max-width: 500px) {
    font-size: 12px;
  }
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

  @media (max-width: 500px) {
    margin-top: 10px;
    margin-left: 20px;
  }
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

  @media (max-width: 800px) {
    left: 310px;
  }

  @media (max-width: 500px) {
    left: 210px;
    bottom: 60px;
  }
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

const Project = ({ tools, image, projectName, linkUrl }) => {
  const handleClick = () => {
    window.open(linkUrl, '_blank');
  };

  return (
    <>
      <Container>
        <a href={linkUrl} target="blank">
          <ScreenShotLeft src={image} />
        </a>
        <ToolWrapper>
          <ToolsLogo src={toolLogo} />
          <Tools>{tools}</Tools>
        </ToolWrapper>
        <Name>{projectName}</Name>
        <Button onClick={handleClick}>
          <Arrow src={rightArrow} />
        </Button>
      </Container>
    </>
  );
};

export default Project;
