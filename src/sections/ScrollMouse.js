import styled from "styled-components";

const Shape = styled.div`
  position: relative;
  top: 30%;
  border: 2px white solid;
  width: 24px;
  height: 40px;
  border-radius: 40px;
`;

const Wheel = styled.div`
  background-color: white;
  width: 4px;
  height: 5px;
  position: relative;
  left: 43%;
  border-radius: 20px;
  animation: scroll 1.3s infinite;

  @keyframes scroll {
    from {
      top: 5px;
      opacity: 1;
    }
    to {
      top: 30px;
      opacity: 0;
    }
  }
`;

const Text = styled.p`
  position: relative;
  top: 30%;
`;

const ScrollMouse = () => {
  return (
    <>
      <Shape>
        <Wheel></Wheel>
      </Shape>
      <Text>Scroll Down</Text>
    </>
  );
};

export default ScrollMouse;
