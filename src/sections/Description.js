import styled from 'styled-components';
import picture from '../img/pfp.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 120px;
  width: 30%;

  @media (max-width: 1350px) {
    margin: 0;
  }
`;

const ProfilePicture = styled.img`
  width: 200px;
  border-radius: 50%;

  @media (max-width: 1500px) {
    width: 190px;
  }

  @media (max-width: 1350px) {
    margin: 30px 0 20px 0;
    width: 180px;
  }

  @media (max-width: 1000px) {
    width: 150px;
  }

  @media (max-width: 650px) {
    width: 130px;
  }
`;

const DescriptionP = styled.p`
  font-size: 20px;
  width: 550px;
  line-height: 35px;

  @media (max-width: 1500px) {
    width: 450px;
  }

  @media (max-width: 1350px) {
    font-size: 18px;
    width: 500px;
  }

  @media (max-width: 1000px) {
    font-size: 17px;
    width: 450px;
  }

  @media (max-width: 650px) {
    width: 350px;
  }

  @media (max-width: 550px) {
    width: 300px;
    font-size: 15px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
  color: var(--theme);
`;

const Description = () => {
  return (
    <Container>
      <ProfilePicture src={picture} />
      <DescriptionP>
        Hey there, I'm Jonathan Tran! A passionate{' '}
        <Bold>Full-Stack Web Developer </Bold>
        continuously sharpening my skills and eagerly embracing new challenges.
        With a wide range of skills in my toolkit, I'm confident to tackle
        exciting projects head-on. Beyond coding, you'll find me reading books
        or immersed in the virtual worlds of video games.
      </DescriptionP>
    </Container>
  );
};

export default Description;
