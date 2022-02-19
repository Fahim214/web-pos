import { faArrowCircleRight, faArrowRight, faBackward, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetailComp = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`http://localhost:3005/products/${id}`);
      console.log(res);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading . . .</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt="" height={400} width={400} />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.kategori}</h4>
          <h1 className="display-5">{product.nama}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </p>
          <h3 className="display-6 fw-bold my-4">Rp. {product.harga}</h3>
          <p className="lead">{product.deskripsi}</p>
          <button className="btn btn-outline-primary px-4 py-2">
            Add To Cart
          </button>
          <NavLink to="/cart" className="btn btn-primary ms-2">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <Container className="mt-4">
        <NavLink to="/product">
          <FontAwesomeIcon icon={faBackward} />
        </NavLink>
        <span className="mx-5"><b>{product.kategori}</b> <FontAwesomeIcon className="mx-3" icon={faArrowRight} /> {product.nama}</span>
      </Container>
      <Container className="py-5">
        <Row className="py-3">{loading ? <Loading /> : <ShowProduct />}</Row>
      </Container>
    </div>
  );
};

export default ProductDetailComp;
