import styled from 'styled-components';
import GitHub from '../img/githubicon.png';
import LinkedIn from '../img/linkedinicon.png';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useEffect, useState } from 'react';

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #10002b;
  width: 100%;
  height: 150px;
`;

const Button = styled.button`
  position: relative;
  bottom: 30px;
  width: 40px;
  height: 60px;
  border: none;
  border-radius: 3px;
  background-color: #6e44ff;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: translateY(-10%);
    transition: transform 0.3s;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100px;
  margin: 0 auto;
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
`;

const Copyright = styled.div`
  margin-top: 15px;
  font-size: 9px;
  font-weight: bold;
`;

const Footer = () => {
  const [up, setUp] = useState(false);

  const handleClick = () => {
    setUp(true);
  };

  useEffect(() => {
    const home = document.getElementById('home');
    home.scrollIntoView({ behavior: 'smooth' });

    return () => {
      setUp(false);
    };
  }, [up]);

  return (
    <FooterDiv>
      <Button onClick={handleClick}>
        <KeyboardDoubleArrowUpIcon style={{ color: 'white' }} />
      </Button>
      <IconContainer>
        <a href="https://github.com/JonathanTran64" target="blank">
          <Icon src={GitHub} />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-tran-3a2186298/"
          target="blank">
          <Icon src={LinkedIn} />
        </a>
      </IconContainer>
      <Copyright> JONATHAN TRAN &copy;2024</Copyright>
    </FooterDiv>
  );
};

export default Footer;
