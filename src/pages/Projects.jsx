import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";

import project from "../assets/projects/case_study_2.png";
import lift from "../assets/projects/case_study_1.png";
import bananaGoonsInside from "../assets/projects/bananaGoonsInside.png";
import PortfolioFourInside from "../assets/projects/PortfolioFourInside.png";
import recharge_image from "../assets/projects/PortfolioTwoInside.png";
import matrimonial from "../assets/projects/PortfolioSixInside.png";
import { Link } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent <strong className="yellow">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are <strong className="yellow">two full </strong> case studies
          I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Link to="/Pickrr" style={linkStyle}>
              <ProjectCard
                imgPath={lift}
                isBlog={false}
                title="Case Study: Pickrr Dashboard"
                description="Revolutionizing global shipping through an intuitive SAAS logistics solution. Seamlessly manage product pickup, expert packing, and swift worldwide delivery."
              />
            </Link>
          </Col>

          <Col md={6} className="project-card">
            <Link to="/Affinidi" style={linkStyle}>
              <ProjectCard
                imgPath={project}
                isBlog={false}
                title="Case Study: Affinidi Wallet"
                description="Securely store your important documents on the blockchain, leveraging cutting-edge technology to ensure data integrity. Easily expand your digital archive as you safeguard your information."
              />
            </Link>
          </Col>
          <h1 className="project-heading">
            Few UI/UX <strong className="yellow">Designs </strong>
          </h1>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={bananaGoonsInside}
              isBlog={false}
              title="Banana Goons"
              description="Your project description."
            />
          </Col>

          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={recharge_image}
              isBlog={false}
              title="Add Money"
              description="Your project description."
            />
          </Col>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={matrimonial}
              isBlog={false}
              title="Matrimonial"
              description="Your project description."
            />
          </Col>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={PortfolioFourInside}
              isBlog={false}
              title="Payroll App"
              description="Your project description."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
