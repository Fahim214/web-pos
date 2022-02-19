import { faDashboard, faEnvelope, faGear, faGears, faLayerGroup, faMessage, faMoneyBill, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const styleUL = {
  listStyle: "none",
  marginLeft: -10
};

const styleA={ marginLeft: -35} 

let styleB = {
    marginLeft: -25,
    marginTop: 25
}

const NavbarComp = () => {
  return (
    <div>
      <Container fluid className="mt-2">
        <Row>
          <Col>
            <Navbar expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <ul style={styleUL}>
                      <h2 className="mb-4">My Store</h2>
                      <li>
                        <LinkContainer style={styleA} to="/">
                          <Nav.Link>
                            <FontAwesomeIcon icon={faDashboard} /> <span className="mx-3">Dashboard </span>
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                      <li>
                        <LinkContainer style={styleA} to="/product">
                          <Nav.Link>
                            <FontAwesomeIcon icon={faLayerGroup} /> <span className="mx-3">Product </span>
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                      <li>
                        <LinkContainer style={styleA} to="/messages">
                          <Nav.Link>
                            <FontAwesomeIcon icon={faMessage} /> <span className="mx-3">Messages </span>
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                      <li>
                        <LinkContainer style={styleA} to="/bills">
                          <Nav.Link>
                            <FontAwesomeIcon icon={faMoneyBill} /> <span className="mx-3">Bills </span>
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                      <li>
                        <LinkContainer style={styleA} to="/setting">
                          <Nav.Link>
                            <FontAwesomeIcon icon={faGear} /> <span className="mx-3">Setting </span>
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                      <h6 style={styleB}>
                          Other
                      </h6>
                      <li>
                        <LinkContainer style={styleA} to="/notif">
                          <Nav.Link>
                            <FontAwesomeIcon icon={faEnvelope} /> <span className="mx-3">Notifikasi </span>
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                      <li>
                        <LinkContainer style={styleA} to="/support">
                          <Nav.Link>
                            <FontAwesomeIcon icon={faUserAlt} /> <span className="mx-3">Support </span>
                          </Nav.Link>
                        </LinkContainer>
                      </li>
                    </ul>
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

export default NavbarComp;
