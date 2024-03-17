import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: lightgray solid;
  border-radius: 20px;
  padding: 10px 40px;
  margin: 0 30px 30px 0;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 5px;
  transition: transform 0.6s;

  &:hover {
    transform: scale(1.4);
    transition: transform 0.6s;
  }

  @media (max-width: 1700px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 1500px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 1350px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 1000px) {
    width: 80px;
    height: 70px;
  }

  @media (max-width: 800px) {
    width: 60px;
    height: 40px;
  }

  @media (max-width: 500px) {
    width: 60px;
    height: 40px;
  }
`;

const Name = styled.p`
  margin: 0;
`;

const Logo = ({ name, image, imageGray }) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Container>
      <LogoImg
        src={hover ? image : imageGray}
        id={name}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Name>{name}</Name>
    </Container>
  );
};

export default Logo;
