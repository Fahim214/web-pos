import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/ProductAction";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import OffCanvasExample from "../ProductDetail/CartDetailComp";

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
          <Col style={{ textAlign: "right" }}>
            <input
            style={{borderRadius: 10, padding: 5}}
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Row className="justify-content-center">
          {getListProductResult ? (
            getListProductResult
              .filter((product) => product.nama.toLowerCase().includes(search))
              .map((product) => {
                return (
                  <Col md={4} xs={6}>
                    <Card className="my-3 p-2">
                      <Card.Img
                      className="crd-img"
                        variant="top"
                        src={product.image}
                        height={230}
                      />
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>{product.nama}</Card.Title>
                        <Card.Title className="mb-5">
                          <h3>{product.harga}</h3>
                        </Card.Title>
                        <div style={{ display: 'flex',justifyContent: 'center'}}>
                        <Row className=" justify-content-center ">
                          <Col md={6} xs={6} style={{textAlign: 'right'}}>
                            <NavLink to={`/product/${product.id}`}>
                              <Button style={{width: 70}} variant="primary">Detail</Button>
                            </NavLink>
                          </Col>
                          <Col md={6} xs={6}>
                            {["end"].map((placement, idx) => (
                              <OffCanvasExample
                              key={idx}
                              placement={placement}
                              name="Buy"
                              image={product.image}
                              nama={product.nama}
                              harga={product.harga}
                              rating={product.rating && product.rating.rate}
                              />
                              ))}
                          </Col>
                        </Row>
                              </div>
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
