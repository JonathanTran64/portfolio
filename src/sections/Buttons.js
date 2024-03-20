import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 20px;
  transition: color 0.1s;
  margin: 0 20px;

  &:hover {
    color: var(--theme);

    cursor: pointer;
  }

  @media (max-width: 1100px) {
    font-size: 17px;
  }

  @media (max-width: 700px) {
    font-size: 15px;
    margin-right: 0;
  }

  @media (max-width: 700px) {
    font-size: 10px;
    margin-right: 0;
  }
`;

const Buttons = ({ text, id }) => {
  const handleClick = () => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return <Button onClick={handleClick}>{text}</Button>;
};

export default Buttons;
