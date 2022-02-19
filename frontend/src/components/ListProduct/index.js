import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/ProductAction";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ListProduct() {
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    // Get API
    console.log("useEffect ");
    dispatch(getListProduct());
  }, [dispatch]);

  const [search, setSearch] = useState("");

  return (
    <div>
      <Container>
        <Row>
          <Col style={{textAlign: 'right'}}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Row>
          {getListProductResult ? (
            getListProductResult.filter((product) => 
                product.nama.toLowerCase().includes(search)
            ).map((product) => {
              return (
                <Col md={4} xs={6}>
                  <Card className="my-3 p-2">
                    <Card.Img variant="top" src={product.image} height={230} />
                    <Card.Body>
                      <Card.Title>{product.nama}</Card.Title>
                      <Card.Title className="mb-5">
                        <h3>{product.harga}</h3>
                      </Card.Title>
                      <NavLink to={`/product/${product.id}`}>
                        <Button variant="primary">Selengkapnya</Button>
                      </NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : getListProductLoading ? (
            <p>Loading . . .</p>
          ) : (
            <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ListProduct;
