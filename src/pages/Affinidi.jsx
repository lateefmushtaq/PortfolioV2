import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import image1 from "../assets/affindi/case_study_2.png";
import image2 from "../assets/affindi/persona_ux.png";
import image3 from "../assets/affindi/wf1.png";
import image4 from "../assets/affindi/wf2.png";
import image5 from "../assets/affindi/wf3.png";
import image6 from "../assets/affindi/d1.png";
import image7 from "../assets/affindi/d2.png";
import image8 from "../assets/affindi/d3.png";
import image9 from "../assets/affindi/d4.png";
import image10 from "../assets/affindi/d5.png";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const iconStyle = {
  fontSize: "48px",
};

const textStyle = {
  fontSize: "20px",
  textAlign: "justify",
  padding: "8px",
  marginBottom: "10px",
  color: "white",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const Affinidi = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Project <strong className="yellow">Context : </strong>
        </h1>
        <p style={{ color: "white", textAlign: "justify" }}>
          Designing a digital wallet for hassle-free document verification and
          other in-app features such as loan applications. Developing a
          user-friendly interface that allows users to upload and manage their
          documents easily.
        </p>

        {/* Row 1 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <Link to="/Pickrr" style={linkStyle}>
              <ProjectCard imgPath={image1} isBlog={false} />
            </Link>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-text">
            <h1 className="project-heading">
              Problem <strong className="yellow">Statement: </strong>
            </h1>
            <p style={{ color: "white", textAlign: "justify" }}>
              Conducted research on the challenges faced by Workers, our team
              identified several problems several challenges related to digital
              record-keeping, credit scoring, documentation, and verification.
              These problems are hindering their access to financial services
              and other benefits.
            </p>
          </Col>
        </Row>

        {/* Row 3 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard imgPath={image2} isBlog={false} />
          </Col>
        </Row>

        {/* Row 4 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <h1 className="project-heading">
              Our Possible <strong className="yellow">Solution: </strong>
            </h1>
            <p style={textStyle}>
              Develop a digital platform that enables them to easily manage
              their income and work-related documentation, incorporating a
              secure digital record-keeping system for verification and a credit
              scoring feature that considers their work history.The platform
              could provide easy access to loans and certifications, ensuring
              proper documentation of payslips.
            </p>
          </Col>
        </Row>

        {/* Row 5 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <h1 className="project-heading">
              {" "}
              Behind the <strong className="yellow">scenes: </strong>{" "}
            </h1>
            <p style={textStyle}>
              To start with, we required information from workers. Understanding
              the problem in person and over calls with a sample amount of
              people. Gain an understanding of how workers perceive smartphone
              applications and the level of trust they have in them. Overall
              usage of smartphone and how do they interact with currently using
              applications. <br />
              More than 80% of the audience is using a smartphone. Low quality
              smart phones with low pixel density. They are mostly interacting
              using social apps (WhatsApp). Online forms and writing information
              manually is not encouraged. They usually do not fiddle with
              settings of any application they use. They prefer calls over
              text/chat/email. Icons are something they can relate to and
              remember them for their usage. Interested in trying new
              applications for their ease of life. <br />I began the project by
              conducting competitive analysis to gather insights on similar
              products offered by other companies. The objective was to gain
              inspiration and direction for the design of the product.
            </p>
          </Col>
        </Row>

        {/* Row 6 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image3}
              isBlog={false}
              additionalText="User Flow"
            />
          </Col>
        </Row>
        {/* Row 7 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image4}
              isBlog={false}
              additionalText="Verfiying ID with wallet & file structure"
            />
          </Col>
        </Row>
        {/* Row 8 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image5}
              isBlog={false}
              additionalText="File structure for various documents"
            />
          </Col>
        </Row>
        {/* Row 9 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image6}
              isBlog={false}
              additionalText="Signup screens"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image7}
              isBlog={false}
              additionalText="Verfiying account"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image8}
              isBlog={false}
              additionalText="Scaning barcode to share credentials"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image9}
              isBlog={false}
              additionalText="Adding credentials from third party digilocker"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image10}
              isBlog={false}
              additionalText="Adding a driving licence and verfiying it"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={8} md={12} className="project-card">
            <h1 className="project-heading">
              Role <strong className="yellow">and </strong> Team
            </h1>
            <p style={textStyle}>
              As a designer assigned to this project, my responsibilities
              included conducting research, performing competitive analysis, and
              designing the UI/UX. Throughout the project, I collaborated
              closely with a team consisting of a Product Manager, Product
              Associates, and the Engineering Team.
            </p>
          </Col>
        </Row>
        {/* Row end */}

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={10} className="tech-icons">
            <p
              style={{ ...iconStyle, color: "white", animation: "fadeOut 2s" }}
            >
              <FaCheck />
            </p>
            <p style={textStyle}>
              Based on our data, it appears that around 90% of our intended
              audience have already downloaded our application and updated their
              documents. Even before its marketing phase, the app had already
              received over 100,000 downloads on the Google Play Store, with a
              rating of 4.3 stars. Next step is to launch a pan-India marketing
              campaign and integrate the app with leading credit providers.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Affinidi;
