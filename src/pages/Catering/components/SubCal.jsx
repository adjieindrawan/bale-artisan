import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

// img
import iconCal from "../../../assets/images/icon-cal.svg";
import iconMin from "../../../assets/images/i-min-g.svg";
import iconPlus from "../../../assets/images/i-plus-g.svg";

const SubCal = () => {
  return (
    <>
      <Card className="p-5">
        <Card.Body>
          <img src={iconCal} alt="" className="ms--2" />
          <Row>
            <Col className="my-3">
              <h4 className="fw-bold">Jenis Menu</h4>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline active btn-cal"
                >
                  Standart
                </Button>
              </div>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline btn-cal"
                >
                  Premium
                </Button>
              </div>
            </Col>
            <Col md={6} className="my-3">
              <h4 className="fw-bold">Paket Langganan</h4>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline active btn-cal"
                >
                  Daily
                </Button>
                <span className="ms-3 block-text">
                  Paket Daily silahkan pilih 1 - 3 hari
                </span>
              </div>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline btn-cal"
                >
                  Weekly
                </Button>
                <span className="ms-3 block-text">
                  Paket Weekly silahkan pilih 4 - 7 hari
                </span>
              </div>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline btn-cal"
                >
                  Monthly
                </Button>
                <span className="ms-3 block-text">
                  Paket Monthly silahkan pilih 16 - 30 hari
                </span>
              </div>
            </Col>
            <Col className="my-3">
              <div>
                <h4 className="fw-bold">Jumlah Hari</h4>
                <InputGroup className="mb-3 ms--2 mt-3">
                  <img src={iconMin} alt="" className="pointer" />
                  <FormControl
                    placeholder="1 - 3"
                    className="form-cstm m-2"
                    disabled
                  />
                  <span className="txt-form">Hari</span>
                  <img src={iconPlus} alt="" className="pointer" />
                </InputGroup>
              </div>
              <div className="mt-4">
                <h4 className="fw-bold">Jumlah Paket</h4>
                <InputGroup className="mb-3 ms--2 mt-3">
                  <img src={iconMin} alt="" className="pointer" />
                  <FormControl
                    placeholder="0"
                    className="form-cstm m-2"
                    disabled
                  />
                  <span className="txt-form">Paket</span>
                  <img src={iconPlus} alt="" className="pointer" />
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={{ span: 3, offset: 9 }} className="d-grid">
              <Button
                variant="secondary"
                className="btn-green btn-alt py-2 fw-bold"
              >
                Estimasikan
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default SubCal;
