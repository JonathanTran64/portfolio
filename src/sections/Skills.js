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
          <Logo image={htmlLogo} imageGray={htmlWhiteLogo} name={"HTML"} />
          <Logo image={cssLogo} imageGray={cssWhiteLogo} name={"CSS"} />
          <Logo image={jsLogo} imageGray={jsWhiteLogo} name={"JavaScript"} />
        </Rows>
        <Rows>
          <Logo
            image={nodejsLogo}
            imageGray={nodejsWhiteLogo}
            name={"NODE.JS"}
          />
          <Logo
            image={mongodbLogo}
            imageGray={mongodbWhiteLogo}
            name={"MONGODB"}
          />
          <Logo image={reactLogo} imageGray={reactWhiteLogo} name={"REACT"} />
        </Rows>
      </LogoContainer>
    </>
  );
};

export default Skills;
