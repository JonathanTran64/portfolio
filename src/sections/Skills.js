import styled from "styled-components";
import Logo from "./Logo";

import htmlLogo from "../img/html5.png";
import cssLogo from "../img/css3.png";
import jsLogo from "../img/js.png";
import nodejsLogo from "../img/nodejs.png";
import mongodbLogo from "../img/mongodblogo.png";
import reactLogo from "../img/reactLogo.png";

import htmlWhiteLogo from "../img/html5white.png";
import cssWhiteLogo from "../img/css3white.png";
import jsWhiteLogo from "../img/jswhite.png";
import nodejsWhiteLogo from "../img/nodejswhite.png";
import mongodbWhiteLogo from "../img/mongodblogowhite.png";
import reactWhiteLogo from "../img/reactLogowhite.png";

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  height: 100px;
  justify-content: center;
  align-content: center;

  @media (max-width: 800px) {
    width: 500px;
  }
`;

const MySkills = styled.h2`
  margin-left: 10px;

  @media (max-width: 1700px) {
    margin-left: 40px;
    margin-top: 60px;
  }

  @media (max-width: 1500px) {
    margin-left: 70px;
    margin-top: 100px;
  }

  @media (max-width: 1350px) {
    text-align: center;
    margin: 0 30px 70px 0;
  }

  @media (max-width: 800px) {
    margin-bottom: 100px;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 440px;
  justify-content: space-around;
  margin-bottom: 140px;

  @media (max-width: 1500px) {
    margin-left: 100px;
  }

  @media (max-width: 1350px) {
    margin-left: 0px;
    height: 350px;
  }

  /* @media (max-width: 500px) {
    width: 300px;
  } */
`;

const Skills = () => {
  return (
    <SkillContainer>
      <MySkills>My Skills</MySkills>
      <LogoContainer>
        <Logo image={htmlLogo} imageGray={htmlWhiteLogo} name={"HTML"} />
        <Logo image={cssLogo} imageGray={cssWhiteLogo} name={"CSS"} />
        <Logo image={jsLogo} imageGray={jsWhiteLogo} name={"JavaScript"} />

        <Logo image={nodejsLogo} imageGray={nodejsWhiteLogo} name={"NODE.JS"} />
        <Logo
          image={mongodbLogo}
          imageGray={mongodbWhiteLogo}
          name={"MONGODB"}
        />
        <Logo image={reactLogo} imageGray={reactWhiteLogo} name={"REACT"} />
      </LogoContainer>
    </SkillContainer>
  );
};

export default Skills;
