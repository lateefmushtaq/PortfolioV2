import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Hi, my name is <b className="yellow">Lateef Mushtaq</b>
              <br />
              <br />
              I graduated with a Bachelor's degree in Computer Science and
              Engineering in 2019 and Masters Degree in Data Analytics.
              <br />
              <br />
              As a<b className="yellow"> Designer </b>, I enjoy tackling new
              challenges and continuously expanding my skillset.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
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
