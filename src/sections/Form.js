import styled from "styled-components";

const FormF = styled.form`
  margin: 0 auto;
  background-color: white;
  width: 800px;
  height: 650px;
  border-radius: 5px;

  @media (max-width: 1300px) {
    width: 600px;
    height: 500px;
  }

  @media (max-width: 800px) {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 550px) {
    width: 350px;
    height: 450px;
  }
`;

const FormFlex = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 700px;

  @media (max-width: 1300px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    width: 430px;
  }

  @media (max-width: 550px) {
    width: 300px;
  }
`;

const Label = styled.label`
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 13px;
`;

const Input = styled.input`
  border: none;
  background-color: lightgray;
  padding-left: 20px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;

  &:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    height: 30px;
  }
`;

const TextArea = styled.textarea`
  border: none;
  background-color: lightgray;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  resize: none;
  height: 300px;
  padding: 15px 20px 0px 20px;

  &:focus {
    outline: none;
  }

  @media (max-width: 1300px) {
    height: 170px;
  }

  @media (max-width: 800px) {
    height: 120px;
  }
  @media (max-width: 550px) {
    height: 170px;
  }
`;

const Button = styled.button`
  position: relative;
  left: 550px;
  top: 40px;
  border: none;
  background-color: #6e44ff;
  color: white;
  width: 200px;
  height: 50px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s;

  @media (max-width: 1300px) {
    width: 160px;
    left: 390px;
    top: 25px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
    width: 120px;
    height: 40px;
    left: 345px;
    top: 15px;
  }

  @media (max-width: 550px) {
    left: 205px;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10%);
    transition: transform 0.3s;
  }
`;

const Form = () => {
  return (
    <>
      <FormF>
        <FormFlex>
          <Label for="name">Name</Label>
          <Input type="text" id="name" placeholder="Enter Your Name" />

          <Label for="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter Your Email" />

          <Label for="message">Message</Label>
          <TextArea id="message" placeholder="Enter Your Message" />
        </FormFlex>

        <Button type="submit">SUBMIT</Button>
      </FormF>
    </>
  );
};

export default Form;
