import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/ProductAction";
import { Button, Card, Col, Container, Row, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import OffCanvasExample from "../ProductDetail/CartDetailComp";
import ListProductMakanan from "./ListProductMakanan";
import { LinkContainer } from "react-router-bootstrap";

function ListProduct() {
  const { getListProductResult, getListProductLoading, getListProductError, deleteProductResult } =
    useSelector((state) => state.ProductReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    // Get API
    console.log("useEffect ");
    dispatch(getListProduct());
  }, [dispatch]);

  useEffect(() => {
    if(deleteProductResult){
      dispatch(getListProduct());
    }
  }, [deleteProductResult, dispatch])

  const [search, setSearch] = useState("");

  return (
    <div>
      <Container className="mt-4"> 
        <Row>
          <Col>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <LinkContainer to="/product/makanan">
                      <Nav.Link className="me-3">Makanan</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/product/pakaian">
                      <Nav.Link className="me-3">Pakaian</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/product/elektronik">
                      <Nav.Link className="me-3">Elektronik</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/product/alatrumah">
                      <Nav.Link className="me-3">Alat Rumah</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/product/buah">
                      <Nav.Link className="me-3">Buah</Nav.Link>
                    </LinkContainer>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search Here"
                      className="me-2"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <ListProductMakanan 
      getListProductResult={getListProductResult} 
      getListProductLoading={getListProductLoading}
      getListProductError={getListProductError}
      deleteProductResult={deleteProductResult}
      search={search}
      dispatch={dispatch}
      />
    </div>
  );
}

export default ListProduct;
