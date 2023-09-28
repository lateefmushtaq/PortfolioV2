import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // Import the email icon

const Footer = () => {
  // Function to open the email client when the email icon is clicked
  const openEmailClient = () => {
    window.location.href = "mailto:lateefmushtaq4@gmail.com";
  };

  return (
    <Container fluid className="footer">
      <Row className="align-items-center justify-content-center">
        <Col md="12" className="text-center footer-body" style={{ fontSize: "16px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <a
              href="mailto:lateefmushtaq4@gmail.com"
              style={{ color: "white", textDecoration: "none" }}
              onClick={openEmailClient}
            >
              <HiOutlineMail style={{ marginRight: "10px" }} />{" "}
              lateefmushtaq4@gmail.com
            </a>
            <span style={{ margin: "0 10px" }}>|</span>
            <a
              href="https://www.linkedin.com/in/lateefmushtaq/"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn style={{ marginRight: "10px" }} /> LinkedIn
            </a>
            <span style={{ margin: "0 10px" }}>|</span>
            <a
              href="https://dribbble.com/lateefmushtaq"
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <AiFillDribbbleCircle style={{ marginRight: "10px" }} /> Dribbble
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
