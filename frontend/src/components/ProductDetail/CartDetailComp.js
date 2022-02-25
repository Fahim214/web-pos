import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";

const crd = {
    width: "13rem", 
    border: "none", 
    margin: "10px auto", 
    textAlign: "center",
    marginTop: 50
}

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
      <Button variant="success" onClick={handleShow} style={{width: 60}}>
        {name}
      </Button>
    </div>
      <Offcanvas show={show} onHide={handleClose} {...props} style={{borderRadius: 34}}>
        <Card style={crd}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.nama}</Card.Title>
            <Card.Text>
             Rating {props.rating} <FontAwesomeIcon icon={faStarHalfAlt} />
            </Card.Text>
            <h2 className="fw-bold">{props.harga}</h2>
          </Card.Body>
        </Card>
        
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
