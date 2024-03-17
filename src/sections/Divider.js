import styled from "styled-components";

const DividerDiv = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  opacity: 0.3;
`;

const Divider = () => {
  return <DividerDiv></DividerDiv>;
};

export default Divider;
