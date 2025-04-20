import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

import { useState } from "react";

export const Footer = () => {
  const [hoverText, setHoverText] = useState(false);
  const [hoverName, setHoverName] = useState(false);

  return (
    <footer className="footer" style={{ padding: "40px 0", backgroundColor: "#1f1f1f" }}>
      <Container>
        <Row className="justify-content-center">
          <Col size={12} className="text-center mb-3">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
              <a href="#"><img src={navIcon4} alt="Icon" /></a>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col size={12} className="text-center">
          <p
  style={{
    color: "#f0f0f0",
    fontWeight: "500",
    fontSize: "16px",
    textShadow: hoverText ? "0 0 6px rgba(255, 255, 255, 0.4)" : "0 0 10px rgba(255, 255, 255, 0.2)",
    transition: "text-shadow 0.3s ease",
    display: "inline-block",
  }}
  onMouseEnter={() => setHoverText(true)}
  onMouseLeave={() => setHoverText(false)}
>
  <a
    href="https://www.linkedin.com/in/bhavesh-desale-5823b7257/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#00acee",
      marginRight: "6px",
      textDecoration: "none",
      fontWeight: "600",
      transition: "all 0.3s ease",
      textShadow: hoverName
        ? "0 0 8px #00acee, 0 0 15px #007bb5"
        : "none",
    }}
    onMouseEnter={() => setHoverName(true)}
    onMouseLeave={() => setHoverName(false)}
  >
    @2025 Bhavesh Desale
  </a>
  All rights reserved.
</p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
