import React, { useState } from "react";
import util from "../helper/util";
import { Button, Col, Modal, Row } from "react-bootstrap";

function ModalCal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderSelectedPackages = (selectedPackages) => {
    if (selectedPackages.length > 0) {
      return selectedPackages.map((data) => <div>{data.name}</div>);
    } else {
      return "-";
    }
  };

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

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className={props.bg + " text-white"} closeButton>
          <Modal.Title>
            <h5 className="mb-0 fw-bold">Estimasi Harga</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {props.menuType && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Jenis Menu</p>
                <span>{props.menuType}</span>
              </Col>
            )}
            {props.packageName && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Paket Langganan</p>
                <span>{props.packageName}</span>
              </Col>
            )}
            {props.dayAmount && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Jumlah Hari</p>
                <span>{props.dayAmount}</span>
              </Col>
            )}
            {props.packageAmount && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Jumlah Paket</p>
                <span>{props.packageAmount}</span>
              </Col>
            )}
            {props.orderAmount && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Jumlah Pesanan</p>
                <span>{props.orderAmount}</span>
              </Col>
            )}
            {props.selectedPackages && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Lauk Utama</p>
                <div>
                  {props.selectedPackages.length &&
                    renderSelectedPackages(
                      props.selectedPackages.filter(
                        (data) => data.category === "Lauk Utama"
                      )
                    )}
                </div>
              </Col>
            )}
            {props.selectedPackages && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Lauk Pendamping</p>
                <div>
                  {props.selectedPackages.length &&
                    renderSelectedPackages(
                      props.selectedPackages.filter(
                        (data) => data.category === "Lauk Pendamping"
                      )
                    )}
                </div>
              </Col>
            )}
            {props.selectedPackages && (
              <Col xs={6} className="my-2">
                <p className="fw-bold mb-1">Lauk Tambahan</p>
                <div>
                  {props.selectedPackages.length &&
                    renderSelectedPackages(
                      props.selectedPackages.filter(
                        (data) => data.category === "Tambahan"
                      )
                    )}
                </div>
              </Col>
            )}
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
            <Col md={{ span: 6, offset: 3 }} className=" mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=6282134595795&text=Hi%20Bale%2C%20mau%20estimasi%20harga%20paket%20untuk%20Catering%20Bale%20dong%3F"
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

export default ModalCal;
