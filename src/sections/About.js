import styled from 'styled-components';

import Skills from './Skills';
import Description from './Description';
import Underline from './Underline';
import Divider from './Divider';
import TitleSection from './TitleSection';

const Container = styled.div`
  height: 100vh;

  @media (max-width: 1550px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

const Seperator = styled.div`
  position: absolute;
  left: 49.9%;
  top: 140%;
  background-color: white;
  width: 5px;
  height: 300px;
  border-radius: 30px;

  @media (max-width: 1700px) {
    height: 200px;
    top: 150%;
  }

  @media (max-width: 1350px) {
    height: 0px;
  }
`;

const About = () => {
  return (
    <>
      <Container id="about">
        <TitleSection title={'ABOUT ME'} />
        <Underline />
        <Seperator></Seperator>
        <Wrapper>
          <Description />
          <Skills />
        </Wrapper>
      </Container>
      <Divider />
    </>
  );
};

export default About;
