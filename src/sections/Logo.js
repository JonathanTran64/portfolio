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
  transition: transform 1s;

  &:hover {
    transform: scale(1.5);
    transition: transform 0.6s;
  }

  @media (max-width: 1500px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 1300px) {
    width: 70px;
    height: 70px;
  }
`;

const Name = styled.p`
  margin: 0;
`;

const Logo = ({ name, image, imageGray }) => {
  const [hover, setHover] = useState(false);

  let imageHover;
  if (hover) {
    imageHover = image;
  } else {
    imageHover = imageGray;
  }

  useEffect(() => {
    const image = document.getElementById(name);

    const handleMouseEnter = () => {
      setHover(true);
    };

    const handleMouseLeave = () => {
      setHover(false);
    };

    image.addEventListener("mouseenter", handleMouseEnter);
    image.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      image.removeEventListener("mouseenter", handleMouseEnter);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hover]);

  return (
    <Container>
      <LogoImg src={imageHover} id={name} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Logo;
