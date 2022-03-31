import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

// img
import iconCal from "../../../assets/images/icon-cal.svg";
import iconMin from "../../../assets/images/i-min-g.svg";
import iconPlus from "../../../assets/images/i-plus-g.svg";
import ModalCal from "../../../components/ModalCal";

const CustomCal = () => {
  return (
    <>
      <Card className="p-5">
        <Card.Body>
          <img src={iconCal} alt="" className="ms--2" />
          <Row>
            <Col md={4} className="my-3">
              <h5 className="fw-bold">Jenis Menu</h5>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline active"
                >
                  Standart
                </Button>
                <Button variant="secondary" className="btn-green-outline ms-2">
                  Premium
                </Button>
              </div>
              <h5 className="fw-bold mt-4">Lauk Utama</h5>
              <Row className="my-3">
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="main1">
                    <Form.Check type="checkbox" label="Daging" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="main2">
                    <Form.Check type="checkbox" label="Seafood" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="main3">
                    <Form.Check type="checkbox" label="Ayam" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="4">
                    <Form.Check type="checkbox" label="Lainnya" />
                  </Form.Group>
                </Col>
                <Col xs={12} className="block-text">
                  Sudah termasuk nasi
                </Col>
              </Row>
            </Col>
            <Col md={4} className="my-3">
              <h5 className="fw-bold">Lauk Pendamping</h5>
              <Row className="my-3">
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="second1">
                    <Form.Check type="checkbox" label="2 Jenis" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="second2">
                    <Form.Check type="checkbox" label="3 Jenis" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="second3">
                    <Form.Check type="checkbox" label="4 Jenis" />
                  </Form.Group>
                </Col>
              </Row>

              <h5 className="fw-bold mt-4">Tambahan</h5>
              <Row className="my-3">
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="addtional1">
                    <Form.Check type="checkbox" label="Minuman" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="addtional2">
                    <Form.Check type="checkbox" label="Buah" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="addtional3">
                    <Form.Check type="checkbox" label="Kerupuk" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="addtional4">
                    <Form.Check type="checkbox" label="Snack" />
                  </Form.Group>
                </Col>
                <Col xs={12} className="block-text">
                  Sudah termasuk nasi
                </Col>
              </Row>
            </Col>
            <Col md={4} className="my-3">
              <div>
                <h5 className="fw-bold">Jumlah Pesanan</h5>
                <InputGroup className="mb-3 ms--2 mt-3">
                  <img src={iconMin} alt="" className="pointer" />
                  <FormControl
                    placeholder="20 - 100"
                    className="form-cstm m-2"
                    disabled
                  />
                  <span className="txt-form">Hari</span>
                  <img src={iconPlus} alt="" className="pointer" />
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={{ span: 3, offset: 9 }} className="d-grid">
              <ModalCal variant="secondary" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomCal;
