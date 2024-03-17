import styled from "styled-components";

const Title = styled.h1`
  font-size: 55px;
  padding-top: 120px;
  text-align: center;
`;

const TitleSection = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TitleSection;
