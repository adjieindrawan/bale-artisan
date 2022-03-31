import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

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
      >
        Estimasikan
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCal;
