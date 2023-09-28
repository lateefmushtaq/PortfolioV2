import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import Skillstack from "../components/Skillset/Skillstack";
import Toolstack from "../components/Skillset/Toolstack";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          <strong>My</strong> <span className="yellow"> Skills</span>
        </h1>
        <Skillstack />
      </Container>      
    </Container>
  );
};

export default Skillset;
