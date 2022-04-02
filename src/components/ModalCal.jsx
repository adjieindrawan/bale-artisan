import React, { useState } from "react";
import util from "../helper/util";
import { Button, Col, Modal, Row } from "react-bootstrap";

function ModalCal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant={props.variant}
        className="btn-green btn-alt py-2 fw-bold"
        onClick={handleShow}
        disabled={props.disabled}
      >
        Estimasikan
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={props.bg + " text-white"} closeButton>
          <Modal.Title>
            <h5 className="mb-0 fw-bold">Estimasi Harga</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6} className="my-2">
              <p className="fw-bold mb-1">Jenis Menu</p>
              <span>Premium</span>
            </Col>
            <Col xs={6} className="my-2">
              <p className="fw-bold mb-1">Jenis Menu</p>
              <span>Premium</span>
            </Col>
            <Col xs={6} className="my-2">
              <p className="fw-bold mb-1">Jenis Menu</p>
              <span>Premium</span>
            </Col>
            <Col xs={6} className="my-2">
              <p className="fw-bold mb-1">Jenis Menu</p>
              <span>Premium</span>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={6} className="my-2 align-self-center">
              <p className="fw-bold mb-1">Estimasi Harga:</p>
            </Col>
            <Col xs={6} className="my-2 align-self-center">
              <h4 className={props.tc + " fw-bold mb-0"}>
                {util.thousandSeparator(props.totalPrice)}
              </h4>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="d-grid mt-4">
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

export default ModalCal;
