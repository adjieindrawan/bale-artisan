import React, { useState } from "react";
import { Button, Col, Modal, Row, Card } from "react-bootstrap";

// icons
import { BiX } from "react-icons/bi";

function ModalMenu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = props.data;

  const linkCatering = `https://api.whatsapp.com/send?phone=6282134595795&text=Hi%20Bale%2C%20menu%20*${data.title}*%20jenis%20${props.menu}%20di%20Catering%20Bale%20ini%20rasanya%20bakal%20gimana%20sih%3F`;
  const linkHealthy = `https://api.whatsapp.com/send?phone=6282134595795&text=Hi%20Bale%2C%20menu%20*${data.title}*%20di%20Healthy%20Food%20Bale%20ini%20rasanya%20bakal%20gimana%20sih%3F`;

  return (
    <>
      <Card className="menu-sm h-100 pointer" onClick={handleShow}>
        <Card.Img src={data.img} />
        <Card.Body className="menu-title">{data.title}</Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose} centered>
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
            <Col md={{ span: 6, offset: 3 }} className="my-3">
              <a
                href={props.type ? linkHealthy : linkCatering}
                target="_blank"
                rel="noreferrer"
                className="d-grid text-decoration-none"
              >
                <Button
                  variant={props.variant}
                  className={props.btn + " btn-alt py-2"}
                >
                  Tanya<b>Bale</b>
                </Button>
              </a>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMenu;
