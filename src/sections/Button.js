import styled from "styled-components";

const Buttons = ({ text, id }) => {
  const Button = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    font-size: 20px;
    transition: color 0.2s;

    &:hover {
      color: red;
    }
  `;

  const handleClick = () => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return <Button onClick={handleClick}>{text}</Button>;
};

export default Buttons;
