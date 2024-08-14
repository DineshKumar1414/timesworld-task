import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        
        <Row className="justify-content-center">
          <Col md={8} className="text-center social-icons">
            <Nav className="justify-content-center">
            <Nav.Link href="#">
                <FontAwesomeIcon icon={faGoogle} className="fa-icon" />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faFacebookF} className="fa-icon" />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" />
              </Nav.Link>
              
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p>Example@email.com</p>
            <p>&copy; 2020 Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
