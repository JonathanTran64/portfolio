import styled from "styled-components";

const UnderlineDiv = styled.div`
  margin: 10px auto;
  height: 6px;
  width: 70px;
  background-color: lightgreen;
  border-radius: 40px;
`;

const Underline = () => {
  return <UnderlineDiv></UnderlineDiv>;
};

export default Underline;
