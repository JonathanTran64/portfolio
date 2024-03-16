import styled from "styled-components";
import Logo from "./Logo";

import htmlLogo from "../img/html5.png";
import cssLogo from "../img/css3.png";
import jsLogo from "../img/js.png";
import nodejsLogo from "../img/nodejs.png";
import mongodbLogo from "../img/mongodblogo.png";
import reactLogo from "../img/reactLogo.png";

import htmlGrayLogo from "../img/html5gray.png";
import cssGrayLogo from "../img/css3gray.png";
import jsGrayLogo from "../img/jsgray.png";
import nodejsGrayLogo from "../img/nodejsgray.png";
import mongodbGrayLogo from "../img/mongodblogogray.png";
import reactGrayLogo from "../img/reactLogoGray.png";

const LogoContainer = styled.div``;

const Rows = styled.div`
  display: flex;
`;

const MySkills = styled.h2`
  margin-top: 80px;

  @media (max-width: 1300px) {
    text-align: center;
  }
`;

const Skills = () => {
  return (
    <>
      <LogoContainer>
        <MySkills>My Skills</MySkills>
        <Rows>
          <Logo image={htmlLogo} imageGray={htmlGrayLogo} name={"HTML"} />
          <Logo image={cssLogo} imageGray={cssGrayLogo} name={"CSS"} />
          <Logo image={jsLogo} imageGray={jsGrayLogo} name={"JavaScript"} />
        </Rows>
        <Rows>
          <Logo
            image={nodejsLogo}
            imageGray={nodejsGrayLogo}
            name={"NODE.JS"}
          />
          <Logo
            image={mongodbLogo}
            imageGray={mongodbGrayLogo}
            name={"MONGODB"}
          />
          <Logo image={reactLogo} imageGray={reactGrayLogo} name={"REACT"} />
        </Rows>
      </LogoContainer>
    </>
  );
};

export default Skills;