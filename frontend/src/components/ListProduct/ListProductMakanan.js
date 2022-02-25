import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Card, Col, Container, Row, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { deleteProduct, detailProduct } from '../../actions/ProductAction';
import OffCanvasExample from "../ProductDetail/CartDetailComp";

const style = {
  fontSize: 25, 
  marginLeft: -4, 
  marginTop: -10,
  padding: 7,
  borderRadius: 30
}

const ListProductMakanan = ({
    getListProductResult,
    getListProductLoading,
    getListProductError,
    deleteProductResult,
    search,
    dispatch
}) => {
  return (
    <div>
        <Container className="py-4">
          <NavLink to='/product/add' type='button' className='btn btn-primary'>Create Product</NavLink>
        <Row className="justify-content-center">
          {getListProductResult ? (
            getListProductResult
              .filter((product) => product.nama.toLowerCase().includes(search))
              .map((product) => {
                return (
                  <Col md={4} xs={6} key={product.id}>
                    <Card className="my-3 p-2 crd" style={{borderRadius: 13}}>
                      <div>
                        <FontAwesomeIcon className='btn btn-danger' icon={faClose} style={style} onClick={() => dispatch(deleteProduct(product.id))} alt="Delete"/>
                      </div>
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
                        <div
                          style={{ justifyContent: "center" }}
                        >
                          <Row className=" justify-content-center ">
                            <Col md={6} xs={6}>
                              <NavLink to={`/product/${product.id}`}>
                                <Button style={{ width: 70 }} variant="primary">
                                  Detail
                                </Button>
                              </NavLink>
                            </Col>
                            <Col>
                            <NavLink to={`/product/${product.id}`}>
                                <Button style={{ width: 70 }} variant="success" onClick={() => dispatch(detailProduct(product))}>
                                  Edit
                                </Button>
                              </NavLink>
                            </Col>
                            {/* <Col md={6} xs={6}>
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
                            </Col> */}
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
  )
}

export default ListProductMakanan