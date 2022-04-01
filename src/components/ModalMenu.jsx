import React, { useState } from "react";
import { Button, Col, Modal, Row, Card } from "react-bootstrap";

// images
import iClose from "../assets/images/bx-x.svg";

// icons
import { BiX } from "react-icons/bi";

function ModalMenu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = props.data;
  console.log(data);
  return (
    <>
      <Card className="menu-sm h-100 pointer" onClick={handleShow}>
        <Card.Img src={data.img} />
        <Card.Body className="menu-title">{data.title}</Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <BiX onClick={handleClose} className="i-close" />
          <img src={data.imgLg} alt="" className="rounded img-fluid" />
          <h4 className="my-3 fw-bold text-center">{data.title}</h4>
          <Row>
            <Col xs={6} className="my-2">
              <p className="fw-bold mb-1">Jenis Menu</p>
              <Row>
                {data.bahan.map((data, i) => (
                  <Col xs={6} key={i}>
                    {data}
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={3} className="my-2">
              <p className="fw-bold mb-1">Harga Normal</p>
              <span>{data.price}</span>
            </Col>
            <Col xs={3} className="my-2">
              <p className="fw-bold mb-1">Kalori</p>
              <span>{data.cal}</span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="d-grid my-3">
              <Button
                variant={props.variant}
                className={props.btn + " btn-alt py-2"}
              >
                Tanya<b>Bale</b>
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMenu;
