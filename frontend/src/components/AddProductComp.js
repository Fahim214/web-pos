import React, { useEffect, useState } from "react";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addProduct, getListProduct } from "../actions/ProductAction";

const AddProductComp = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [image, setImage] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("")

  let navigate = useNavigate()

  const {addProductResult} = useSelector((state) => state.ProductReducers)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Masuk handlesubmit');

    dispatch(addProduct({
      nama: nama, 
      harga: harga, 
      image: image,
      kategori: kategori,
      deskripsi: deskripsi}));

      navigate(-1)
  };

  useEffect(() => {
    if(addProductResult){
      dispatch(getListProduct());
      setNama('')
      setHarga('')
      setImage('')
      setDeskripsi('')
      setKategori('')
    }
  }, [addProductResult, dispatch])

  return (
    <div className="py-4">
      <Container>
        <div className="pb-4">
          <NavLink to="/product">
            <FontAwesomeIcon icon={faBackward} />
          </NavLink>
        </div>
        <Row className="align-items-center justify-content-center">
          <Col>
            <h1 className='fw-bold'>Add Product</h1>
            <Form
              className="mt-4"
              onSubmit={(e) => handleSubmit(e)}
              style={{ width: 400 }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Produk</Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Nama Produk"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="number"
                  name="harga"
                  placeholder="1xx.xxx"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Url Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="https....."
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Kategori</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="https....."
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} 
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col className='mt-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMKsOGiODjw73hQywmVJvcris1wnfNDwsHQ&usqp=CAU" alt="" width={410} style={{borderRadius: 20, opacity: .7}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProductComp;
