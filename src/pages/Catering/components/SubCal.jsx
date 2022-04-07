/* eslint-disable array-callback-return */
import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";

// img
import iconCal from "../../../assets/images/icon-cal.svg";
import iconMin from "../../../assets/images/i-min-g.svg";
import iconPlus from "../../../assets/images/i-plus-g.svg";
import ModalCal from "../../../components/ModalCal";

// data
import packageList from "../data/subscription.package.data.json";

import util from "../../../helper/util";

const SubCal = () => {
  const [dayAmount, setDayAmount] = useState(null);
  const [packageAmount, setPackageAmount] = useState(null);
  const [selected, setSelected] = useState(
    packageList.find((data) => data.name === "Daily")
  );

  const onChangeType = (type, name) => {
    const data = packageList.find(
      (item) => item.type === type && item.name === name
    );
    if (data) {
      setSelected(data);
      setDayAmount(data.minDay);
    }
  };
  return (
    <>
      <Card className="p-5">
        <Card.Body>
          <img src={iconCal} alt="" className="ms--2" />
          <Row>
            <Col className="my-3">
              <h5 className="fw-bold">Jenis Menu</h5>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline btn-cal"
                  active={selected.type === "Standart"}
                  onClick={() => onChangeType("Standart", "Daily")}
                >
                  Standart
                </Button>
              </div>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline btn-cal"
                  active={selected.type === "Premium"}
                  onClick={() => onChangeType("Premium", "Weekly")}
                >
                  Premium
                </Button>
              </div>
            </Col>
            <Col md={6} className="my-3">
              <h5 className="fw-bold">Paket Langganan</h5>
              {packageList.map(
                (data, index) =>
                  selected.type === data.type && (
                    <div className="my-3" key={index}>
                      <Button
                        variant="secondary"
                        className="btn-green-outline btn-cal"
                        active={selected.name === data.name}
                        onClick={() => {
                          setSelected(data);
                          setDayAmount(data.minDay);
                        }}
                      >
                        {data.name}
                      </Button>
                      <span className="ms-3 block-text">
                        Paket {data.name} silahkan pilih {data.minDay} -{" "}
                        {data.maxDay} hari
                      </span>
                    </div>
                  )
              )}
            </Col>
            <Col className="my-3">
              <div>
                <h5 className="fw-bold">Jumlah Hari</h5>
                <InputGroup className="mb-3 ms--2 mt-3">
                  <img
                    src={iconMin}
                    alt=""
                    className="pointer"
                    onClick={() => setDayAmount(dayAmount - 1)}
                  />
                  <FormControl
                    placeholder={`${selected.minDay} - ${selected.maxDay}`}
                    className="form-cstm m-2"
                    value={dayAmount}
                    onChange={(e) => setDayAmount(util.number(e.target.value))}
                    isInvalid={
                      dayAmount !== null &&
                      (dayAmount < selected.minDay ||
                        dayAmount > selected.maxDay)
                    }
                  />
                  <span className="txt-form">Hari</span>
                  <img
                    src={iconPlus}
                    alt=""
                    className="pointer"
                    onClick={() => setDayAmount(dayAmount + 1)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {dayAmount > selected.maxDay
                      ? `Maks. ${selected.maxDay} hari, kurangi jumlah hari!`
                      : `Min. ${selected.minDay} hari, tambahkan jumlah hari!`}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="mt-4">
                <h5 className="fw-bold">Jumlah Paket</h5>
                <InputGroup className="mb-3 ms--2 mt-3">
                  <img
                    src={iconMin}
                    alt=""
                    className="pointer"
                    onClick={() => setPackageAmount(packageAmount - 1)}
                  />
                  <FormControl
                    placeholder="0"
                    className="form-cstm m-2"
                    value={packageAmount}
                    onChange={(e) =>
                      setPackageAmount(util.number(e.target.value))
                    }
                    isInvalid={packageAmount !== null && packageAmount < 1}
                  />
                  <span className="txt-form">Paket</span>
                  <img
                    src={iconPlus}
                    alt=""
                    className="pointer"
                    onClick={() => setPackageAmount(packageAmount + 1)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Min. 1 paket, tambahkan jumlah paket!
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={{ span: 3, offset: 9 }} className="d-grid">
              <ModalCal
                disabled={
                  dayAmount < selected.minDay ||
                  dayAmount > selected.maxDay ||
                  packageAmount < 1
                }
                variant="secondary"
                bg="bg-yellow"
                btn="btn-green"
                tc="text-primary"
                totalPrice={parseFloat(
                  selected.price * dayAmount * packageAmount
                )}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default SubCal;
