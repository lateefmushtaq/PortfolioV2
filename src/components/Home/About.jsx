import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} xs={12} className="home-about-description">
            <p className="home-about-body">
              Hi, my name is <b className="yellow">Lateef Mushtaq</b>
              <br />
              <br />
              I am UI/UX designer with over 3 years of experience in e-commerce (Shipment Solutions),
              blockchain, and IT services. Holding a Bachelor's degree in
              Computer Science and a Master's in Data Analytics, I have a deep
              understanding of both the technical and analytical aspects of
              design. <br />
              <br /> Throughout my career, I've had the privilege of
              collaborating with diverse clients, honing my skills in crafting
              intuitive and innovative user experiences. I'm dedicated to
              pushing the boundaries of design to create meaningful digital
              interactions." User As a<b className="yellow"> Designer </b>, I
              enjoy tackling new challenges and continuously expanding my
              skillset.
              <br />
            </p>
          </Col>
          <Col md={4} xs={12} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
