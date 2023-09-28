import React from "react";
import {
  FaRocket,
  FaPencilAlt,
  FaSitemap,
  FaPaintBrush,
  FaCode,
} from "react-icons/fa"; // Import relevant icons
import { Col, Row } from "react-bootstrap";

const Skillstack = () => {
  const iconStyle = {
    fontSize: "48px", // Adjust the icon size as needed
  };

  const textStyle = {
    fontSize: "16px", // Set the desired font size for the text
    textAlign: "center", // Center the text
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaPaintBrush /> {/* Relevant icon */}
        </p>
        <p style={textStyle}>UI/UX design</p>
      </Col>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaSitemap /> {/* Relevant icon */}
        </p>
        <p style={textStyle}>Information architecture</p>
      </Col>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaPencilAlt /> {/* Relevant icon */}
        </p>
        <p style={textStyle}>Wireframing</p>
      </Col>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaRocket />
        </p>
        <p style={textStyle}>Prototyping</p>
      </Col>

      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaCode /> {/* Relevant icon */}
        </p>
        <p style={textStyle}>HTML/CSS/Bootstrap</p>
      </Col>
    </Row>
  );
};

export default Skillstack;

