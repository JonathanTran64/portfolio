import styled from "styled-components";

const Title = styled.h1`
  font-size: 55px;
  padding-top: 120px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 40px;
  }

  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const TitleSection = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TitleSection;
