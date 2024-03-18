import styled from "styled-components";
import TitleSection from "./TitleSection";
import Underline from "./Underline";
import Form from "./Form";

const Container = styled.div`
  height: 100vh;
`;

const Instruction = styled.p`
  text-align: center;
  width: 600px;
  margin: 30px auto;

  @media (max-width: 1300px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 400px;
  }
`;

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <TitleSection title={"CONTACT"} />
        <Underline />
        <Instruction>
          Feel free to fill out this form with your contact information and
          message if you wish to contact me, and I'll get back to you as soon as
          possible.
        </Instruction>
        <Form />
      </Container>
    </>
  );
};

export default Contact;
