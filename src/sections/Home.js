import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightcoral;
  margin: 0 auto;
  height: 90vh;
`;

const Name = styled.h1`
  font-size: 150px;
`;

const Home = () => {
  return (
    <Container>
      <Name>Jonathan Tran </Name>
      <h1>Full-Stack Web Developer</h1>
    </Container>
  );
};

export default Home;
