import { Link } from "react-router-dom";
import Home from "./sections/Home";
import Nav from "./sections/Nav";
import About from "./sections/About";

const Hero = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
    </>
  );
};

export default Hero;
