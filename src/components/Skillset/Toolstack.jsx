import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFigma, FaSketch,FaFile,FaPalette, FaJira } from "react-icons/fa";
const iconStyle = {
  fontSize: "48px", // Adjust the icon size as needed
};

const textStyle = {
  fontSize: "16px", // Set the desired font size for the text
  textAlign: "center", // Center the text
};
const Toolstack = () => {
  return (
  <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaFigma />
        </p>
        <p style={textStyle}>Figma</p>
      </Col>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaSketch />
        </p>
        <p style={textStyle}>Sketch</p>
      </Col>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaPalette />
        </p>
        <p style={textStyle}>Adobe XD</p>
      </Col>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaFile />
        </p>
        <p style={textStyle}>Miro</p>
      </Col>
      <Col xs={12} md={2} className="tech-icons">
        <p style={iconStyle}>
          <FaJira />
        </p>
        <p style={textStyle}>Jira</p>
      </Col>
    </Row>
   
    </>
  );
};


export default Toolstack;
