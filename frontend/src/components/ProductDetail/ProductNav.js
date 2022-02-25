import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const ProductNav = () => {
  return (
    <div>
      <Container className="d-inline-block" style={{width: "50%", position: "absolute"}}>
        <Row>
          <Col>
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductNav;
