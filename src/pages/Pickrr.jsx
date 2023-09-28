import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import image1 from "../assets/casestudypickrr/image1.png";
import image2 from "../assets/casestudypickrr/persona_one.png";
import image3 from "../assets/casestudypickrr/orderPlaced.png";
import image4 from "../assets/casestudypickrr/notificationFlow.png";
import image5 from "../assets/casestudypickrr/image5.gif";
import image6 from "../assets/casestudypickrr/popups.gif";
import image7 from "../assets/casestudypickrr/popuptemp1.gif";
import image8 from "../assets/casestudypickrr/sideDrawer.gif";
import image9 from "../assets/casestudypickrr/tracking.png";
import image10 from "../assets/casestudypickrr/fdm.png";
import image11 from "../assets/casestudypickrr/oldvsnew.gif";

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

const Pickrr = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          About <strong className="yellow">Pickrr : </strong>
        </h1>
        <p style={{ color: "white", textAlign: "justify" }}>
          Pickrr is an ecommerce shipment platform that helps sellers ship their
          products using various courier partners, and provides features to
          manage the shipping process such as tracking, packing, and handling
          issues like weight disputes, order returns, and non-deliverables.
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
              Previously, users were not receiving timely updates, causing
              inconvenience. Although tracking numbers were available, they did
              not provide real-time updates, which resulted in a poor customer
              experience. Sellers were incurring a cost to provide updates on
              other platforms. Also, the process was time-consuming, as the
              updates had to be sent individually to each customer.
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
              To enhance the customer experience, Pickrr should create a feature
              within its dashboard that enables sellers to provide real-time
              shipment notifications to their customers. This would eliminate
              the need for sellers to use other platforms to update customers
              individually, thereby saving time and money. The tool should also
              allow sellers to manage and track the history of shipment events
              in a single place, making order management more efficient.
            </p>
          </Col>
        </Row>

        {/* Row 5 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image3}
              isBlog={false}
              additionalText="We're integrating the notification tool into the existing
              dashboard, ensuring that all events and associated modules are
              arranged hierarchically for optimal functionality."
            />
          </Col>
        </Row>

        {/* Row 6 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image4}
              isBlog={false}
              additionalText="User Flow for Notification"
            />
          </Col>
        </Row>

        {/* Row 7 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <h1 className="project-heading">
              My <strong className="yellow">Notifications: </strong>
            </h1>
            <ProjectCard
              imgPath={image5}
              isBlog={false}
              additionalText="Select communication medium and choose a template."
            />
          </Col>
        </Row>

        {/* Row 8 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image6}
              isBlog={false}
              additionalText="Add coins to send updates."
            />
          </Col>
        </Row>

        {/* Row 9 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image7}
              isBlog={false}
              additionalText="Checking notification history & using filter."
            />
            <p style={textStyle}></p>
          </Col>
        </Row>

        {/* Row 10 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image8}
              isBlog={false}
              additionalText="Side navigation collapse."
            />
          </Col>
        </Row>

        {/* Row 11 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <h1 className="project-heading">
              Old Tracking Page Mobile{" "}
              <strong className="yellow">Old vs New </strong>
            </h1>
            <ProjectCard
              imgPath={image9}
              isBlog={false}
              additionalText="UX Problem: Important information is difficult to access due to excessive scrolling caused by unnecessary input fields and CTAs after a user has searched for an order."
            />
          </Col>
        </Row>

        {/* Row 12 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={image10}
              additionalText="The new design focuses on user needs and provides easy navigation for tracking orders. It includes UX changes such as a history of previously searched orders, reduced scrolling, and displaying main information on the screen.."
            />
          </Col>
        </Row>

        {/* Row 13 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <h1 className="project-heading">
              Creating order: <strong className="yellow">Then vs Now </strong>
            </h1>
            <Particle />
            <ProjectCard imgPath={image11} isBlog={false} />
          </Col>
        </Row>

        {/* Row 14 */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card"></Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={8} md={12} className="tech-icons">
            <p
              style={{ ...iconStyle, color: "white", animation: "fadeOut 2s" }}
            >
              <FaCheck />
            </p>

            <p style={textStyle}>
              After launching the new design, we have experienced a significant
              increase in the number of orders, with a 30% increase compared to
              the previous period. The updated design has not only attracted new
              users but has also made it easier for our existing customers to
              place orders, resulting in a better conversion rate. The intuitive
              layout and user-friendly interface have contributed to this
              success, making it easier for customers to navigate and complete
              their orders.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Pickrr;
